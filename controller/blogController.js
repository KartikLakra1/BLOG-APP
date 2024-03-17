import mongoose from 'mongoose';
import blogModels from '../Models/blogModels.js';
import userModels from '../Models/userModels.js';


export const getAllBlogController = async (req, res) => {
    try {
        const blogs = await blogModels.find({})
        if (!blogs) {
            return res.status(401).send({
                success: false,
                message: "No Blogs Found"
            })
        }

        res.status(201).send({
            success: true,
            BlogCount: blogs.length,
            message: "All Blogs List : ",
            blogs,
        })

    } catch (error) {
        console.log(error);
        res.status(401).send({
            success: false,
            message: "Error while getting all blogs",
            error,
        })
    }
}

// create BlogController
export const createBlogController = async (req, res) => {
    try {
        const { title, description, image, useremail } = req.body;

        if (!title || !description || !image || !useremail) {
            res.status(401).send({
                success: false,
                message: "Please provide all fields"
            })
        }

        const existingUser = await userModels.findOne({ email: useremail });

        if (!existingUser) {
            res.status(401).send({
                success: false,
                message: "unable to find user",
            })
        }

        const blog = await blogModels.create({ title, description, image, author: existingUser._id });

        // let BlogId = new mongoose.Types.ObjectId(blog._id);

        // await userModels.updateOne(
        //     {
        //         email: useremail
        //     },
        //     {
        //         $push: {
        //             blogs: BlogId
        //         },
        //     },
        //     { upsert: false, new: true },
        // )

        await userModels.findByIdAndUpdate(existingUser._id, {
            $push: {
                blogs: blog._id
            }
        })

        res.status(201).send({
            success: true,
            message: "Blog Created !!",
            blog
        })

    } catch (error) {
        console.log(error);
        res.status(401).send({
            success: false,
            message: "blog created error"
        })
    }
}

// update blog controller
export const updateBlogController = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, image } = req.body;
        const blog = await blogModels.findByIdAndUpdate(id, { ...req.body }, { new: true });
        return res.status(201).send({
            success: true,
            message: "Blog updated successfully",
            blog,
        })

    } catch (error) {
        console.log(error);
        res.status(401).send({
            success: false,
            message: "blog updated error"
        })
    }
}

// getting single blog
export const getBlogByController = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await blogModels.findById(id);

        if (!blog) {
            return res.status(401).send({
                success: false,
                message: "Blog not found with this ID",
            })
        }

        res.status(201).send({
            success: true,
            message: "Blog fetched successfully",
            blog,
        })

    } catch (error) {
        console.log(error);
        res.status(401).send({
            success: false,
            message: "error in getting single blog"
        })
    }
}

// deleting single blog
export const deleteblogController = async (req, res) => {
    try {
        const blogId = req.params.blogId;

        const blog = await blogModels.findById(blogId);

        if (!blog) {
            console.error('Blog not found:', blogId);
            return res.status(404).json({ success: false, error: 'Blog not found' });
        }

        // Ensure that the author field is populated
        if (!blog.author) {
            console.error('Author not found for blog:', blogId);
            return res.status(404).json({ success: false, error: 'Author not found for the blog' });
        }

        const user = await userModels.findById(blog.author);

        if (!user) {
            console.error('user not found:', blog.author);
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        // Remove blog reference from user's blogs array
        user.blogs = user.blogs.filter(b => b.toString() !== blogId);


        // Save the updated user
        await user.save();


        // Delete the blog
        await blogModels.findByIdAndDelete(blogId);

        res.status(201).send({
            success: true,
            message: "deleted successfully !!!"
        })

    } catch (error) {
        console.log(error);
        res.status(401).send({
            success: false,
            message: "error in deleting blog"
        })
    }
}

// get user blog
export const userBlogController = async (req, res) => {
    try {

        const userBlog = await userModels.findById(req.params.userId).populate("blogs");

        if (!userBlog) {
            res.status(401).send({
                success: false,
                message: "Blogs not found with this id",
            })
        }

        res.status(201).send({
            totalCount: userBlog.blogs.length,
            success: true,
            message: "all blogs fetched from this user",
            userBlog,
        })

    } catch (error) {
        console.log(error);
        res.status(401).send({
            success: true,
            message: "error in user blog",
            error,
        })
    }
}


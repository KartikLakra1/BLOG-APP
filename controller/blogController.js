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
        const { title, description, image, user } = req.body;

        if (!title || !description || !image || !user) {
            res.status(401).send({
                success: false,
                message: "Please provide all fields"
            })
        }

        const existingUser = await userModels.findById(user);

        if (!existingUser) {
            res.status(401).send({
                success: false,
                message: "unable to find user",
            })
        }

        const newBlog = new blogModels({ title, description, image, user });
        const session = await mongoose.startSession();
        session.startTransaction();
        await newBlog.save({ session });
        existingUser.blogs.push(newBlog);
        await existingUser.save({ session });
        await session.commitTransaction();
        await newBlog.save();

        res.status(201).send({
            success: true,
            message: "Blog Created !!",
            newBlog,
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
        const { id } = req.params;
        const blog = await blogModels.findByIdAndDelete(id).populate('user');
        await blog.user.blogs.pull(blog);
        await blog.user.save();

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
        const userBlog = await userModels.findById(req.params.id).populate("blogs");

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


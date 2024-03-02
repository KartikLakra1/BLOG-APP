import userSchema from '../Models/userModels.js';
import { comparePassowrd, hashPassword } from '../utils/userUtils.js';
import jwt from 'jsonwebtoken';


// getiing all users
export const getallusers = async (req, res) => {
    try {
        const users = await userSchema.find({});

        res.status(201).send({
            userCount: users.length,
            success: true,
            message: "All users got successfully",
            users
        })
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success: false,
            message: "Error in gettting all users",
        })
    }
}


//regiseter user
export const registerController = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username) { res.status(401).send({ success: false, message: "Username is required" }) }
        if (!email) { res.status(401).send({ success: false, message: "email is required" }) }
        if (!password) { res.status(401).send({ success: false, message: "password is required" }) }

        const existingUser = await userSchema.findOne({ email });

        if (existingUser) {
            res.status(401).send({
                success: false,
                message: "User register already please login"
            })
        }

        const hashpwd = await hashPassword(password);

        const user = await new userSchema({ username, email, password: hashpwd }).save();

        return res.status(201).send({
            success: true,
            message: "User registered successfully",
            user,
        })

    } catch (error) {
        console.log(error);
        res.status(401).send({
            success: false,
            message: "Error in resgisteration",
        })
    }
}

//login user
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email) { res.status(401).send({ success: false, message: "email is required" }) }
        if (!password) { res.status(401).send({ success: false, message: "password is required" }) }

        const user = await userSchema.findOne({ email });

        if (!user) {
            res.status(401).send({
                success: false,
                message: "USer not registed please register first"
            })
        }

        const compPWD = await comparePassowrd(password, user.password);

        if (!compPWD) {
            res.status(401).send({
                success: false,
                message: "Invalid credientails"
            })
        }

        const token = await jwt.sign({ _id: user._id }, process.env.SECRET_KEY, { expiresIn: '4d' });

        res.status(201).send({
            success: true,
            message: " User logged in successfully",
            token,
            user,
        })

    } catch (error) {
        console.log(error);
        res.status(401).send({
            success: false,
            message: "Error in login",
        })
    }
}
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import morgan from 'morgan';
import colors from 'colors';
import connectToDb from './Config/db.js';
import userRoutes from './routes/userRoutes.js';
import BlogRoutes from './routes/blogRoutes.js';




const app = express();

connectToDb();


app.use(cors());
app.use(express.json())
app.use(morgan('dev'));



app.use("/", (req, res) => {
    res.send("<h1>server main page hi hi hi ----- 3 ----- 4!!!!</h1>")
})

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/blog', BlogRoutes);

const PORT = process.env.PORT || 8081

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT} under ${process.env.DEV_MODE} mode`.bgCyan.white);
})
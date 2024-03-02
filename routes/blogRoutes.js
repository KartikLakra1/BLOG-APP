import express from 'express';
import { createBlogController, deleteblogController, getAllBlogController, getBlogByController, updateBlogController, userBlogController } from '../controller/blogController.js';

const router = express.Router();

router.get('/all-blog', getAllBlogController);

router.post('/create-blog', createBlogController);

router.put('/update-blog/:id', updateBlogController);

router.get('/get-blog/:id', getBlogByController);

router.delete('/delete-blog/:id', deleteblogController);

router.get('/user-blog/:id', userBlogController);

export default router
import express from 'express';
import { getQuestions, postQuestions } from '../controllers/questions.controller';


const router = express.Router();


router.get("/questions",getQuestions);
router.post("/questions",postQuestions);


export default router;
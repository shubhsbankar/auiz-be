import express , {Request, Response}from 'express';
import Question from '../modules/question.model';
export const getQuestions = async (req : Request, res: Response) => {
    try {
        // Fetch all questions
        const questions = await Question.find();

        // Send response
        res.status(200).json({
            msg: "Fetched all questions successfully",
            questions,
        });
    } catch (error: any) {
        // Handle errors
        console.error("Error fetching questions:", error);
        res.status(500).json({
            msg: "Internal Server Error",
            error: error.message,
        });
    }

}

export const postQuestions = async (req : Request, res: Response) : Promise<void>=> {
    // res.status(200).json({"msg": "Shubham Got post request for questions"});
    try{
        console.log(req.body);
        const { description, options } = req.body;
        if (!description || !options || options.length < 2){
            res.status(400).json({
                error : 'Invalid Input : A question must have description and at least 2 options'
            });
        }

        const question = new Question({
            description,
            options,
        });

        const saveQuestion = await question.save();
        res.status(201).json({
            msg: "Question created succesfully",
            question: saveQuestion
        });

    }catch(error){
         console.error("Error while creating a question",error);
         res.status(500).json({
            msg: "Internal server error"
         })
    }

}
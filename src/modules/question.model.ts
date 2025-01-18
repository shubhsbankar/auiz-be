import mongoose, { Schema, Document } from "mongoose";
import optionSchema, { IOption } from "./option.model";


export interface IQuestion extends Document{
  description: string;
  options: IOption[];
}

const questionSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    options: [optionSchema],
    // validate:{
    //     validator: function(ops: any []){
    //         return ops.length >= 2;
    //     },
    //     message: 'A question must have at least 2 options',
    // },
    

});

const Question = mongoose.model('Question',questionSchema);

export default Question;
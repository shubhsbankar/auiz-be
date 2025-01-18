import mongoose from 'mongoose';

export interface IOption {
    description: string;
    isCorrect: boolean;
  }

const   optionSchema = new mongoose.Schema({
    description: {
        type: String,
        required : true
    },
    isCorrect : {
        type: Boolean,
        required :  true,
        default: false
    }

});
export default optionSchema;
 


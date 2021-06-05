import { Schema, model } from "mongoose";

const userSchema = new Schema({
    firstname: {
        type: String,
        requiered: true
    },
    lastname: String,
    age: Number
})

export default model('User', userSchema)
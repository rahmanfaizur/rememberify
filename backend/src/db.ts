import mongoose from "mongoose";
import { model, Schema } from "mongoose";

async function connectDb() {
    await mongoose.connect("mongodb+srv://frs:frsn123@100frdev.wuffk.mongodb.net/frBrain");
    console.log("Connected to the server!");
}

connectDb();

const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String
})

export const UserModel = model("User", UserSchema)

//create content schema and then the content endpoint as well!

const ContentSchema = new Schema({
    title: String,
    link: String,
    type: String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true}
})

export const ContentModel = model("Content", ContentSchema);

const LinkSchema = new Schema({
    hash: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true,
    unique: true}
})

export const LinkModel = model("Links", LinkSchema);
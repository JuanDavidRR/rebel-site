import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
    } catch (error) {
        handleError(error);
        throw new Error("Couldn't connect to Mongoose")
    }
}

export default connect
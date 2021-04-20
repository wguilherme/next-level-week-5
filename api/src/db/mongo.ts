import mongoose from "mongoose";

// process.env.MONGODB_URL

mongoose.connect("mongodb://localhost:27017/nlw5", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.log("Database connected!"))
.catch((err) => console.error(err));
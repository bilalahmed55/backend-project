

import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config()

const app = express()

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})


//chatgpt code

// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import express from "express";
// import { DB_NAME } from "./constants.js";

// // Load environment variables
// dotenv.config();

// const app = express();

// (async () => {
//     try {
//     // Connect to MongoDB
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
//     });
//     console.log("Connected to MongoDB");

//     // Handle express errors
//     app.on("error", (error) => {
//         console.log("Express Error:", error);
//         throw error;
//     });

//     // Start the server
//     app.listen(process.env.PORT, () => {
//         console.log("App is listening on port", process.env.PORT);
//     });
//     } catch (error) {
//     console.log("Error connecting to MongoDB:", error.message);
//     }
// })();
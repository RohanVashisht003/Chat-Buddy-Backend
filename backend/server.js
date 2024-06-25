import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
dotenv.config();

const app = express()
const PORT = process.env.PORT || 5000

// FOR PARSING INCOMING REQUESTS WITH JSON PAYLOADS
app.use(express.json())
app.use(cookieParser())

// HANDLING ROUTES
app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)
app.use("api/messages",messageRoutes)



// SERVER RUNNING MESSAGE
sever.listen(PORT,()=>{
    connectToMongoDB()
    console.log(`Server Running on PORT-${PORT}`)

})

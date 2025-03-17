import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import taskRoutes from "./routes/taskRoutes.js"

dotenv.config();
const app = express();

app.use(express.json());

// PORT should be chosen and stored as an environment variable.
const PORT = process.env.PORT || 8080;

// process.env.MONGO_URL should be retrieved from your MongoDB console
// and stored as an environment variable.
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

connectDB();
app.use("/tasks", taskRoutes)

app.listen(PORT, console.log(`Successfully connect to port ${PORT}`));
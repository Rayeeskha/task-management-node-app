const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const taskRoutes = require('./routes/taskRoute')
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000", "https://mern-task-app.onrender.com"],
    credentials: true,
  })
);
// Route
app.use("/api/tasks",taskRoutes);

// const logger = (req, res, next) => {
//   console.log('Middleware run');
//   next();
// }

// Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});





const startServer = async (req, res) => {
    try{
      await connectDB();
      app.listen(PORT, () => {
        console.log(`Server Running on port ${PORT}`);
      });
    }catch(error){
      console.log(error);
    }
}

startServer();

const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 5000
const connectToDB = require("./config/db")
const todoRoutes = require("./routes/route.todo")
const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/todos", todoRoutes)



app.listen(PORT, () => {
    connectToDB();
    console.log(`Server started at http://localhost:${PORT}`)
})
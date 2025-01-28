const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const db = require('./config/db')

db()

// Routes
const aiRouter = require('./routes/aiRouter')

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/ai",aiRouter)

console.log(process.env.PORT)
const port = process.env.PORT || 4000;
app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});

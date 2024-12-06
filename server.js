// server.js
const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

// Import routes
const taskRoutes = require("./routes/taskRoutes");

// Use routes
app.use("/api", taskRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

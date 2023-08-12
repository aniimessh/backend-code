const express = require("express");
const connectDB = require("./config/database");
const addUserRoutes = require("./routes/userRoutes");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(addUserRoutes)
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
})
connectDB()

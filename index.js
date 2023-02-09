const express = require("express");
const app = express();
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todoRoutes");
app.use(express.json());

// routes
app.use("/todo", todoRoutes);

// connect to db
mongoose
    .connect(
        "mongodb+srv://jashan:jashan@cluster0.lptegqs.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log("Error connecting to DB");
        console.log(err);
    });

// const db  = mongoose.connection;

// app port settings
const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

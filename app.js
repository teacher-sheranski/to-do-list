const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UsersRouter = require('./routes/user.router')
const todoModel = require('./routes/todo.router')

const DB_NAME = "ToDo";
const url = `mongodb+srv://tova:tovi123456@mycluster.4zs2ebc.mongodb.net/t${DB_NAME}?retryWrites=true&w=majority`;

(async function connectDB() {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('connected succesfully');
    } catch (error) {
        console.error(error);
    }
})();

const app = express();
app.use(express.json());
app.use(cors())
app.use('/users', UsersRouter);
app.use('/todo', todoModel);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("listening on http://localhost:5000");
});



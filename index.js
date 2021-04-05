const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000
const app = express();

mongoose.connect("mongodb+srv://darshan:wSLWyjopJKwjAyPw@cluster0.ctb0u.mongodb.net/shareFolioDatabase?retryWrites=true&w=majority", {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true,
    useFindAndModify : false,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MpongoDB is connected");
});

//MIDDLEWARES
app.use(express.json());
const userRoute = require("./routes/user_routes");
app.use("/user",userRoute);
const ShareFolioRouter = require("./routes/sharefolio_route");
app.use("/sharefolio",ShareFolioRouter);
const skillsRouter = require("./routes/skills_routes");
app.use("/skills",skillsRouter);
const educationRouter = require("./routes/education_route");
app.use("/education",educationRouter);

app.route("/").get((req,res) => res.json("Root"));

app.listen(PORT, ()=> console.log(`Server running successfully at ${PORT}`));
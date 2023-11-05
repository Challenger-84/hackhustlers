const express = require("express");
const app = express();
const path = require("path");
const { LogInModel, StudentModel } = require("./mongodb");

app.use(express.json());
app.set("view engine", "hbs");

const templatePath = path.join(__dirname, '../templates');
app.set("views", templatePath);

app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    res.render("login")
});

app.get("/signup", (req, res) => {
    res.render("signup")
});

app.post("/login", async (req, res) => {
    const data = {
        name: req.body.name,
        password: req.body.password,
    }

    try {
        const login = new LogInModel(data);
        await login.save();
        res.render("home");
    } catch (error) {
        console.error(error);
        res.send("Error saving data to database");
    }
});

app.post("/page1", async (req, res) => {
    const data = {
        name: req.body.Name,
        year: req.body.Year,
        branch: req.body.Branch,
        bio: req.body.Bio,
        projects: req.body.projects ? [].concat(req.body.projects) : [],
        fields: req.body.fields ? [].concat(req.body.fields) : [],
        skills: req.body.skills ? [].concat(req.body.skills) : []
    }

    try {
        const student = new StudentModel(data);
        await student.save();
        res.render("page1");
    } catch (error) {
        console.error(error);
        res.send("Error saving data to database");
    }
});

app.listen(3000, () => {
    console.log("port connected");
});

app.get("/page1", (req, res) => {
    res.render("page1")
});

app.get("/page2", (req, res) => {
    res.render("page2")
});

app.get("/page3", (req, res) => {
    res.render("page3")
});

app.get("/page4", (req, res) => {
    res.render("page4")
});

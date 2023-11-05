const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Abhinay0211", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Mongodb connected");
}).catch(() => {
    console.log("failed to connect");
});

const LogInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    year: String,
    branch: String,
    bio: String,
    projects: [String],
    fields: [String],
    skills: [String]
});

const LogInModel = mongoose.model("LogInModel", LogInSchema);
const StudentModel = mongoose.model("StudentModel", StudentSchema);

module.exports = { LogInModel, StudentModel };

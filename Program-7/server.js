const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/EmployeeDB")
.then(() => console.log("DB connected"))
.catch(err => console.log(err));

const Employee = mongoose.model("Employee", {
    empid: String,
    name: String,
    department: String,
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.post('/add',async(req,res)=>{
    await Employee.create({
        empid: req.body.empid,
        name: req.body.name,
        department: req.body.department
    });
    res.send("Employee added successfully");
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
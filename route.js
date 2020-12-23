const express = require('express')
const app = express()
const selectExec = require('./controller/exec_selectEmp')
const addExec = require('./controller/exec_addEmp')
const editExec = require('./controller/exec_editEmp');

app.get('/select',async function(req,res){
    var selectQuery = String(req.query.query);
    var results = await selectExec.selectExec(selectQuery);
    res.json(results);

} )

app.post('/addEmp', async function(req,res){
    var emp_no = String(req.query.emp_no)
    var birth_date = String(req.query.bday)
    var first_name = String(req.query.fname)
    var last_name = String(req.query.lname)
    var gender = String(req.query.gender)
    var hire_date = String(req.query.hiredate)
    var addQuery = "insert into employees values(" + emp_no + ",'" + birth_date + 
        "','" + first_name + "','" + last_name + "','" + gender + "','" + hire_date + "')";
    var status = await addExec.addQuery(addQuery);
    var displayData = "select * from employees where emp_no =" + emp_no;
    var results = await selectExec.selectExec(displayData);
    res.json({
        status,results
    })


})

app.post('/editEmp', async function(req,res){
    var emp_no = String(req.query.emp_no)
    var birth_date = String(req.query.bday)
    var first_name = String(req.query.fname)
    var last_name = String(req.query.lname)
    var gender = String(req.query.gender)
    var hire_date = String(req.query.hiredate)
    var editQuery = "update employees set birth_date='" + birth_date + 
        "',first_name='" + first_name + "',last_name='" + last_name + "',gender='" + gender 
        + "',hire_date='" + hire_date + "' where emp_no=" + emp_no;

    var status = await editExec.editQuery(editQuery);
    var displayData = "select * from employees where emp_no =" + emp_no;
    var results = await selectExec.selectExec(displayData);
    res.json({
        status,results
    })


})


module.exports = app;
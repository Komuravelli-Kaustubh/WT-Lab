//step-1 create a folder
//step-2 import package.json file (npm init)
//step-3 import express and mongoose (npm i express)(npm i mongoose)

//step-4 import requried modules
let  express=require('express');
let mongoose=require('mongoose');
let PORT=8085;
let app=express();

// to understand the post data in express
 

app.listen(PORT,(err,data)=>{
    if(err)
    {
        console.log(`Unable to connect to server`)
    }
    else
    {
        console.log(`Server is connected on port ${PORT}`)
    }
})

//step-5 connecting to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/csmc').then(()=>{
    console.log("MongoDB Server is Connected on Port:27017")
})

//step-6 create a schema
let myschema=new mongoose.Schema({
    fname:String,
    lname:String,
    uname:String,
    roll:String,
    email:String,
    pass:String,
    course:String,
    gender:String
})

//step-7 Create a model
let mymodel=new mongoose.model('children',myschema);

//step-8 create routes
// example

// app.get('/spidey',(req,res)=>{
//     let mydata=new mymodel({fname:'spidey',lname:'koti',rno:'143'});
//     //to store the data into collection
//     mydata.save().then(()=>{
//         res.send('Data inserted')
//     });
// })

app.get('/reg',(req,res)=>{
    res.sendFile(__dirname+'/reg.html')
})

//create
app.get('/regis',(req,res)=>{
    
    let mydata=new mymodel({
        fname:req.query.fname,
        lname:req.query.lname,
        uname:req.query.uname,
        roll:req.query.roll,
        email:req.query.mail,
        pass:req.query.pass,
        course:req.query.cname,
        gender:req.query.gen1,
    });
    //to store the data into collection
    mydata.save().then(()=>{
        res.send(`<h2>Thank you for Registering <br> <a href='/'> Click Here goto Home page </a> </h2>`);
        //res.send('Registration is successful')
    });
})

//show
app.get('/showdata',(req,res)=>{
    mymodel.find().then((users)=>{
        //res.send(data);

       let tableHTML = `<h1 align="center">User Details</h1><table border="1" align="center"><tr><th>FirstName</th><th>LastName</th><th>Username</th><th>RollNo</th><th>Paasword</th><th>Email</th><th>Course</th><th>Gender</th></tr>`;

        users.forEach((users) => {
            tableHTML += `<tr><td>${users.fname}</td><td>${users.lname}</td><td>${users.uname}</td><td>${users.roll}</td><td>${users.pass}</td><td>${users.email}</td><td>${users.course}</td><td>${users.gender}</td></tr>`;
        });

        tableHTML += '</table>';
        res.send(tableHTML);
    })
})

//read
app.get('/log',(req,res)=>{
    let user=req.query.uname;
    let pass=req.query.pass;
    mymodel.find({uname:user,pass:pass}).then((users)=>{
        if(users)
        {
            res.sendFile(__dirname+'/success.html')
        }
        else
        {
            res.sendFile(__dirname+'/fail.html')
        }
    })
})

app.get('/',(request,response)=>{
    response.sendFile(__dirname+'/home.html');
})

app.get('/login',(request,response)=>{
    response.sendFile(__dirname+'/login.html');
})

app.get('/edit',(request,response)=>{
    response.sendFile(__dirname+'/edit.html');
})

//update
app.get('/ed',(req,res)=>{
    let fn1=req.query.fname;
    let ln1=req.query.lname;
    let un1=req.query.uname;
    let ps1= req.query.pass;
    let em1=req.query.mail;
    let ht1=req.query.roll;
    let cr1=req.query.cname;
    let gn1=req.query.gen1;
    mymodel.updateOne({uname:un1,pass:ps1},{$set:{fname:fn1,lname:ln1,email:em1,roll:ht1,course:cr1,gender:gn1}}).then((users)=>{
        if(users)
        {
            res.send(`<h2> Hello ${un1} <br> Your Profile is successful Changed <br> <a href='/'> Click Here goto Home page </a></h2>`);
        }
        else
        {
            res.send(`<h2>Sorry Invalid Username Or Password <br> <a href='/'> Click Here goto Home page </a> </h2>`)
        }
    })
})

app.get('/delete',(request,response)=>{
    response.sendFile(__dirname+'/delete.html');
})

app.get('/del',(req,res)=>{
    let u=req.query.uname;
    let p=req.query.pass;
    mymodel.deleteOne({uname:u,pass:p}).then((users)=>{
        if(users)
        {
            res.send(`<h2>${u} is Successfully Deleted<br> <a href='/'> Click Here goto Home page </a> </h2>`);
        }
        else
        {
            res.send(`<h2>Invalid Details<br> <a href='/'> Click Here goto Home page </a> </h2>`);
        }
    })
})


//step-9 Run server
//step-10 give request from browser

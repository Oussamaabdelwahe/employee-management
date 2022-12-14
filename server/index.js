const express =require('express')
const app = express()
const bodyParser= require('body-parser')
const mysql = require('mysql2')
const cors = require ('cors');
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password:"azerty",
    database:"employee_management"
})

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/api/get", (req,res)=> {
    const sqlGet ="SELECT * FROM contact_db ";
    db.query(sqlGet, (error, result)=> {
        res.send(result)
    })
})
app.get("/api/get/:iduser", (req,res)=> {
    const sqlGet ="select iduser from user where name = ? and password = ?";
    db.query(sqlGet,req.params.id, (error, result)=> {
        res.send(result)
    })
})

app.post("/api/post", (req, res)=>{
    const {name,email,contact}= req.body;
    const sqlInsert="INSERT INTO contact_db (name, email, contact) VALUES (?,?,?)";
    db.query(sqlInsert,[name, email,contact],(error,results)=>{
        if(error){
            console.log(error)
        }
    })
})
app.delete("/api/remove/:id", (req, res)=>{
    console.log(req.body)
    const sqlRemove="DELETE FROM contact_db where id = ?";
    db.query(sqlRemove,req.params.id,(error,results)=>{
        if(error){
           res.status(500).send(err) 
        }
        else{res.status(200).json(results)}
    })
})
app.get("/api/get/:id", (req,res)=> {
    const sqlGet ="SELECT * FROM contact_db where id=?";
    db.query(sqlGet,req.params.id, (error, result)=> {
        res.send(result)
    })
})
app.put("/api/put/:id", (req,res)=> {
    const id=req.params.id
    const {name, email, contact}= req.body
    const sqlGet ="UPDATE contact_db SET name=?, email =?, contact=?  where id=?" ;
    db.query(sqlGet,[name, email,contact,id], (error, result)=> {
        console.log(req.body)
        res.send(result)
    })
})
// app.get("/", (req,res)=>{
//     const sqlInsert =
//     "INSERT INTO contact_db (name, email, contact) VALUES ('yacine', 'yacine@gmail.com',26401001)";
//     db.query(sqlInsert, (error, result) =>{
//         console.log("error", error);
//         console.log("result", result);
//         res.send("hello")
//     })
    
// })
app.listen(5000, ()=>{
    console.log("server connectedd");
})
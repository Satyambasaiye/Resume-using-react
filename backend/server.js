const express= require("express");
const cors=require("cors");
const mysql=require("mysql2");
const app=express();
app.use(express.json())
app.use(cors()); 
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root123",
    database:"crud",
})
app.get("/",(req,res)=>{
    const sql="select * from student";
    db.query(sql,(err,data)=>{
        if(err)
        return res.json("erro "+err);
        return res.json(data);
    })
})

app.post('/create',(req,res)=>{
    const sql='insert into student(id,name,email) values( ?,?,?)';
    console.log("requser para:"+req.body.id+req.body.name+" "+req.body.email)
    const values=[
        req.body.id,
        req.body.name,
        req.body.email
    ]
    db.query(sql,values,(err,data)=>
    {
        if(err)
        {
            console.log("error is !!!->"+err)

            return res.json("error")
        }
        
        return res.json(data)
    })
})

app.put('/update/:id',(req,res)=>{
    const sql='update student set name=? ,email=? where id=?';
    const id=req.params.id;
    console.log("requser para:"+req.body.id+req.body.name+" "+req.body.email)
    const values=[
        req.body.name,
        req.body.email,
        id

    ]
    db.query(sql,values,(err,data)=>
    {
        if(err)
        {
            console.log("error is !!!->"+err)

            return res.json("error")
        }
        
        return res.json(data)
    })
})

app.delete('/student/:id',(req,res)=>{
    const sql="delete from student where id=?";
    const id=req.params.id;
    db.query(sql,id,(err,data)=>{
        if(err)
        return res.json("error")

        return res.json(data)
    })
})

app.listen(8081,()=>{
    console.log("listning of post 8081")
})
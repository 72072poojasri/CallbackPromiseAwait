import express from 'express';
// import bodyParser from 'body-parser' ;
const app =express();

app.use(express.json());
// app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("api sucess");
})

app.post('/add-user',(req,res)=>{
    let data =req.body;
    console.log(data);//undefined 
    //logic to add data into your database
    res.send("data added");
});

app.put('/update-user',(req,res)=>{
    let mydata =req.body;
    // let userId = req.params.id;
    // console.log("Updating user id:", userId);
    console.log(mydata);
    //logic to update data in your database
    res.send("data updated");
});


app.delete('/delete-user',(req,res)=>{
    let userId = req.params.id;
    // console.log("Deleting user id:", userId);
    //logic to delete data from your database
    res.send("data deleted");
});

app.listen(7000,()=>{
    console.log("server running at port 7000")
})
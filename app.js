const express = require('express');
const app = express();
const PORT = 8000;
const fs = require('fs')
const cors = require('cors')
app.set('view engine', 'hbs')
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))

app.get('/', (req,res)=>{
    res.render('index',{});
})
app.post('/register',(req,res)=>{
   
    fs.appendFile('data.json',JSON.stringify(req.body).concat(",\n") ,()=>{
        console.log("Submitted");
    })
    res.json({message:"Successfully Submitted the Data"})
})

app.listen(PORT, ()=>{
    console.log(`listening to the port ${PORT}`);
})
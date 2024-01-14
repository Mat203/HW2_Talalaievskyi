const cors = require('cors');
const fs = require('fs');
const os = require('os');
const express = require('express');  
const app = express();  
const bodyParser = require('body-parser')  

console.log(os.platform());

const whitelist = ['http://localhost:3000', 'http://localhost:3001'];

const corsOptions = {
    origin: originFunction,
};

function originFunction (origin, callback) {
    if (whitelist.includes(origin) || !origin) {
        callback(null, true);
    } else {
        callback(new Error('Not allowed by CORS'));
    }
}

console.log(os.totalmem());
const dir = fs.readdirSync('./gaming');
console.log(dir);

const fileContent = fs.readFileSync('./gaming/cheeseburgur.txt', 'utf-8');
console.log(charIsInWord(fileContent, "g"));

function charIsInWord(word, char){
    return word.includes(char);
}

app.use(cors(corsOptions));

//code from practice 1
app.use(bodyParser.json());

const port = 4000;

app.get('/hello', (req, res)=>{
      
    res.json({message:'Hello, World'});
});

app.get('/gamer', (req, res)=>{
      
    res.json({message:'Hello, World'});
});

app.listen(port,()=>{  
    console.log(`Server is running on localhost:${port}`);  
})  
  
app.post('/greet', (req, res)=>{  
    const {name} = req.body;

    if(name){
        res.json({message:`Hello, ${name}!`});
    }
    else{
        res.status(400).json({error:"Name is required"})
        }
})
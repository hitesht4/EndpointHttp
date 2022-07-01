const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();


app.use(cors());


app.get('/', (req, res)=>{
   
   res.sendFile(__dirname+'/index.html');

})

app.get('/api', (req, res)=>{
  fs.readdir('./Data', (err, files)=>{
      if (err){
         console.log(err);
      }else{
         res.send(JSON.stringify(files));
      }
   })
})

app.get('/api/:dir', (req, res)=>{
   const dir = req.params.dir;
   console.log(dir);
   fs.readdir('./Data/Public', (err, files)=>{
      if (err){
         console.log(err);
      }else{
         res.send(JSON.stringify(files));
      }
   })
})



app.listen('7000', (req, res)=>{
   console.log('Server running ');
})
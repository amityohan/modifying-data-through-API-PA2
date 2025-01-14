const express = require('express');
const { resolve } = require('path');
const mongoose=require('mongoose');
const MenuItem=require('./models/MenuItem.js')
require('./database.js')

const app = express();
const port = 3010;

app.use(express.static('static'));
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.post('/menu', async (req,res)=>{
  try{
    const{name, description, price}= req.body;

    if(!name || !description || !price){
      return res.status(400).json({message: 'Name and price missing'});
    }
    const newMenuItem=new MenuItem({name,description,price});
    await newMenuItem.save();
    res.status(200).json({message:`Menu Item created successfully.`})

  }catch(err){
    return res.status(500).json({message:err.message})
  }
})


app.listen(port, () => {
  console.log(`A
    App listening at http://localhost:${port}`);
});

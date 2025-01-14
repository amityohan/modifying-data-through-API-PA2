const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://amityohan20:PfwrwRdOI7H1BZSx@cluster0.jmbrf.mongodb.net/modifying-data-through-API-PA-2")
        .then(()=>{
            console.log("Connected to Database");
        })
        .catch((err)=>{
            console.log(`Error: ${err}`);
        })
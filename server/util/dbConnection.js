const mongoose = require('mongoose');

module.exports = function connectDB(){
    mongoose.connect("mongodb+srv://ygwoods:ygwoods@cluster0.z0ukh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        { useUnifiedTopology: true, useNewUrlParser: true}, function(err){
        if(err) return console.log(err);
        if(!err){
            console.log("Сервер ожидает подключения...");
        };
    });
}


const express = require('express');

const app = express();

app.get("/", function(req,res){
    res.send("Bem vindo aos nossos primeiros passos com o nodeJS com expressJS..");
});

app.listen(8081, function(){
   console.log('Servidor criado na porta 8081'); 
});


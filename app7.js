const http = require("https");
const express = require('express');

const app = express();

const options = {
  "method": "POST",
  "hostname": "treina.pncp.gov.br",
  "port": null,
  "path": "/api/pncp/v1/usuarios/login",
  "headers": {
    "access-control-allow-credentials": "true",
    "content-type": "application/x-www-form-urlencoded",
    "access-control-allow-origin": "http://www2.pmfi.pr.gov.br"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({login: '46f8c6d85a15', senha: 'EaUts4Bvpl9wlEp8'}));
req.end();


app.get("/", function(req,res){
  res.send(req.headers);
});

app.listen(8081, function(){
 console.log('Conexão 8081..'); 
});


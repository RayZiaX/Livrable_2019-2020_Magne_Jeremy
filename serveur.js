const http = require('http');
const fs = require('fs');
const port = 3000;
const {parse} = require('querystring');
http.createServer((req,res)=>{
    if (req.method === "POST"){
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // converti le buffer en string
        });
        req.on('end', () => {
            console.log(req.method)
            console.log(parse(body));
            

        });       
        fs.readFile('index.html', (err,data)=>{
            res.end(data)
        });
    }
    else{
        fs.readFile('index.html', (err,data)=>{
            res.end(data)
        });
    }
}).listen(port);
console.log('serveur lancé sur le port' + port)
const rl = require('readline-sync');
const http = require('http');

const port = rl.question("enter port no: ");

const server =http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text'});
    res.write(`Server is running on ${port}`);
    res.end();
})

server.listen(port);
console.log(`Server is running at http://localhost:${port}`);

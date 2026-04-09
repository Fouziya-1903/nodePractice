import http from 'http';
import logger from './logger.js';

const server = http.createServer((req,res)=>{
    res.write("The server is started");
    res.end();
});

server.listen(3000,()=>{
    console.log(`server started listening on port 3000`);
});
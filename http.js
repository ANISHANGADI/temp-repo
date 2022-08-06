const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("welcome to the home page");  
    }
    if(req.url === '/about'){
        res.end("We are in the about page");   
    }
    res.end(`
        <h1>Oops!!!!</h1>
        <p>We cant seem to find the page we are looking for</p>
        <a href="/"> back home </a>
    `
    )
})

server.listen(5000);

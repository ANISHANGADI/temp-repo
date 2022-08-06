const {readFile , writeFile} = require('fs');
 readFile('./content/first.txt','utf8',(err,res)=>{
    if(err){
        console.log(err);
        return; 
    }
    const first=res;
    console.log(first);
    readFile('./content/second.txt','utf8',(err,res)=>{
        if(err){
            console.log(err);
            return; 
        }
        const second=res;
        console.log(second);
        writeFile('./content/res-async.txt',`Here is the result : ${first} and ${second}`,(err,res)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(res);
        });
    })
 })
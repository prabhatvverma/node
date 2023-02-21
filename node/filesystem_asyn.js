// cred opertaion on asyncronus way
const { isUtf8 } = require("buffer");
const fs = require("fs");

fs.writeFile("async.pdf", "this async file" ,(err)=>{
    console.log("file is created");
    console.log(err);
});

fs.appendFile("async.pdf","  adiing data without overwriting current data", (err)=>{
    console.log("task completed");
    console.log(err);
})
// reading exicting data
fs.readFile("async.pdf","utf-8",(err, data)=>
{
    console.log(data);

})


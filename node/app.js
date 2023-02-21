// function add(args) {
//     let result = 0;
//     args.forEach(args => {
//         result += args * 1;
//     });
//     // args.forEach(function (args) {
//     //     result += args*1;  
//     // });
//     return result;
// }
// const args = process.argv.slice(2);

// console.log(args);
// console.log(add(args));


function sum(...data) {
    return data.reduce(addition, 0);
}

function addition(first, second) {
    return first + second;
};
let sm = sum(2, 3, 4, 5, 6);
console.log(sm);

console.log(sum(3, 5, 6, 8));

setTimeout(() => {
    console.log('hello');
}, 0)

for (let i = 0; i <= 10; i++) {
    console.log(i);
}


let something = () => 'Doing Something';

function whatToDo() {
    return 'Here';
}

console.log(something());

const fs = require("fs");

// creating new file 
fs.writeFileSync("new.txt", "teting file system");

// adding data o exicting file 
fs.appendFileSync("new.txt", " testing to add data in exsting table");

const buf_data= fs.readFileSync("new.txt");
console.log(buf_data);

org_data = buf_data.toString();
console.log(org_data);


//to rename the file 
fs.renameSync("new.txt", "read_write.txt")
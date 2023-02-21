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


function sum(...data)
{
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

for(let i = 0; i <= 10; i++)
{
    console.log(i);
}


let something = () => 'Doing Something';

function whatToDo()
{
    return 'Here';
}

console.log(something());
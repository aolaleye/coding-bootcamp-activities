
if (process.argv[2] === 'add') {
    console.log(parseInt(process.argv[3]) + parseInt(process.argv[4]));
} else if (process.argv[2] === 'subtract') {
    console.log(parseInt(process.argv[3]) - parseInt(process.argv[4]));
} else if (process.argv[2] === 'multiply') {
    console.log(parseInt(process.argv[3]) * parseInt(process.argv[4]));
} else if (process.argv[2] === 'divide') {
    console.log(parseInt(process.argv[3]) / parseInt(process.argv[4]));
} else if (process.argv[2] === 'remainder') {
    console.log(parseInt(process.argv[3]) % parseInt(process.argv[4]));
} else if (process.argv[2] === 'exp') {
    console.log(Math.pow(process.argv[3], process.argv[4]));
} else if (process.argv[2] === 'algebra') {
    console.log((parseInt(process.argv[8]) - parseInt(process.argv[6])) / parseInt(process.argv[3]));
}

// --- OR ---

// var operation = parse.argv[2];
// var num1 = parseFloat(process.argv[3]);
// var num2 = parseFloat(process.argv[4]);
// var result;

// if (operation === 'add') {
//     result = num1 + num2;
// } else if (operation === 'subtract') {
//     result = num1 - num2;
// } else if (operation === 'multiply') {
//     result = num1 * num2;
// } else if (operation === 'divide') {
//     result = num1 / num2;
// } else if (operation === 'remainder') {
//     result = num1 % num2;
// } else if (operation === 'exp') {
//     result = Math.pow(num1, num2);
// } else if (operation === 'multiply') {
//     result = (parseInt(process.argv[8]) - parseInt(process.argv[6])) / num2;
// } 

// console.log(result);


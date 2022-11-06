// let smartSum = function (a,b) {
//     if (typeof a == "number" && typeof b  == "number" ) {
//         return  a + b;
//     } else {
//         console.log("error!");
//     }
// }
// console.log(smartSum(4,77));
// console.log(smartSum("4",77));
      




//  let square = function (a) {
//     if (a != undefined) {
//         console.log(a * a);
//     } else {
//         console.log("error!");
//     }
//   }
//   square(10);
//   square();






// let game = (a) => {
//     let ran = Math.random () * 10;
//     if (a == ran) {
//         console.log("числа совпали");
//     } else {
//         console.log(`числа не совпалию Ваше число ${a}. загадагнное число ${ran}`);
//     }
// }
// game(7);






// let filterFor = (arr, a) =>{
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= a) {
//             newArr.push(arr[i]); 
//         }
//     }
//     for (let i = 0; i < newArr.length; i++) {
//         console.log(newArr[i]);
//     }
// }
// let arr = [5, 4, 3, 8, 0];
// filterFor(arr,6);






// let num =[1,2,3,4,5,6,78]
// let newNum = num.map((item) => { return item } );







const objectWithNumbers = [ 10, 20, 'string', 12 ];
let sum = 0;
objectWithNumbers.forEach((item ,index) =>{
    if (typeof objectWithNumbers[index] == "number") {
        sum = sum + item;
    }
    return sum;
})
console.log(sum);

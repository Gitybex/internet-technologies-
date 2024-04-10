//throw expression;

//throw 42;
//thorw 'Ball';
//throw {
//    head: 'Tail'
//}

//try...catch...finally

// let divide = (a, b) => {
//     try {
//         if(b == 0) {
//             throw "Division by 0"
//         } else {
//             return a / b;
//         }

//     } catch(e) {
//         console.log(e);
//         console.log('Why are you dividing by 0?')
//     }
// }


// let sum =(a, b ,c) => {
//     let div = divide(a, b);
//     return div + c;
// }

// console.log(sum(1, 0, 2))
// compute area only when length and width are positive numbers
// let area = (length, width) => {
//     try {
//         if(length < 0 || width < 0) {
//             throw 'Negative values'
//         } else {
//             return length * width;
//         }
//     } catch(e) {
//         alert(e);
//     }
// }
// console.log(area(-4, 9))


// sum array 
let sumArray =(a) => {
    try{
        if(a.lenth == 0) {
            throw "Empty array";
        } else {
            let sum = 0;
            for(let i = 0; i < a.length; i++) {
                sum = sum + a[i];
            }
            return sum;
        }
    } catch(e) {
         console.log(e);
    }
}
console.log(sumArray([1, 2, 3]));
  
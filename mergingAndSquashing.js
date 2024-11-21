// let input = ['4', '12', '23', '34', '45']; 
// let print = this.print || console.log;
// let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// let n = parseInt(gets());

// let merged = '';
// let squashed = '';


// for (let i = 1; i < n; i++) {

//     let num1 = input[i]; 
//     let num2 = input[i + 1]; 

//     let mergedNum = `${num1[1]}${num2[0]}`;
//     merged += mergedNum;

//     if (i < n - 1) {
//         merged += ' '
//     }

//     let middleDigit = parseInt(num1[1]) + parseInt(num2[0])
    
//     if (middleDigit.length > 1){
//         middleDigit = middleDigit[1]
//     }

//     let sqashedDigit = num1[0] + String(middleDigit) + num2[1];
//     squashed += sqashedDigit
    
//     if (i < n - 1){
//         squashed += ' '
//     }

// }
// print(merged)
// print(squashed)


let input = ['4', '12', '23', '34', '45']; 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = parseInt(gets());

let merged = '';
let squashed = '';

let prevNum = gets(); 


for (let i = 1; i < n; i++) {
    let currentNum = gets(); 

    let mergedNum = `${prevNum[1]}${currentNum[0]}`;
    merged += mergedNum;
    if (i < n - 1) {
        merged += ' '; 
    }

 
    let middleDigit = (parseInt(prevNum[1]) + parseInt(currentNum[0])).toString();
    if (middleDigit.length > 1) {
        middleDigit = middleDigit[1]; 
    }
    let squashedNum = `${prevNum[0]}${middleDigit}${currentNum[1]}`;
    squashed += squashedNum;
    if (i < n - 1) {
        squashed += ' ';
    }


    prevNum = currentNum;
}

print(merged);
print(squashed);
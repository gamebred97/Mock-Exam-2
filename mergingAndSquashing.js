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

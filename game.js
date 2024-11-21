let input = ['111']; 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let sum = 0;
let max = 0

let num = gets().split('').map(Number);


let a = num[0];
let b = num[1];
let c = num[2];

if ( (a + b + c) > (a + b * c)){
    max = a + b + c;

} else {
    max = a + b * c
}

if (a * b + c > max){
    max = a * b + c
}

if (a * b * c > max){
    max = a * b *c
}

print(max)
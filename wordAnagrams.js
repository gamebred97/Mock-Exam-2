let input = ['anagram', '6', 'gramana', 'aaagrnm', 'anagra' , 'margana' , 'abc' , 'xy']; 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let word = String(gets()).split('').sort().join('');
let num = Number(gets());


for (let i = 0; i < num; i++){

    let current = String(gets());
   
    let letters = current.split('').sort().join('');
    

    if (letters === word){
        print("Yes")
    } else  if (letters !== word){
        print("No")
    }
}
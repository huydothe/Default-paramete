//Ex1:
let multiple=(a,b=10)=>a*b;

console.log(multiple(2));
console.log(multiple(2,5));
console.log(multiple(2));

//Ex2:
class Greek{
    constructor(a,b=2) {
        console.log(a*b);
    }
}
let obj1=new Greek(2,5);
let obj2=new Greek(2);

//

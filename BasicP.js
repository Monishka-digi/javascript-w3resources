//Q1. Fibonacci Series
// let x=0
// let y=1
// z= 
//Q2. Prime no. Program
function test_prime(n){
    if (n===1){
        return "Not Prime";
    }
    else if(n === 2){  
        return "Prime";
    }
    else{
        for(x = 2; x < n; x++){
            if(n % x === 0){
        return "Not Prime";
            }
        }
            return "Prime";  
        }
    }
console.log(test_prime(5));
console.log(test_prime(7));

//Q3. Palindrome no. program
// let x= "str";
// function palindrome(str){
//     let n=str.length
//     for (i=0; i<=n/2; i++){
//         for (j=-1; j>=n/-2; j--){
//             if (str[i]==str[j])
//                 return true;
//         }
//         return false;
//     }
// }
// console.log(palindrome("abcdcba"));
// console.log(palindrome("abcdeba"));

//Q4. Factorial program 
//  function factorial(n){
//     let fact=1;
//     for (i=1; i<=n; i++){
//         fact = (fact*i);
//     }
//     return fact;
//  }
//  console.log(factorial(4));
//  console.log(factorial(5));
//  console.log(factorial(10));

 //Q Generate random nos.
//   let x= Math.floor(Math.random()*10);
//   console.log(x);

//Q. Compare two objects
let car1 = {
    color : "black",
    price : "2500000",
    height : "6 feet",
    width : "5 feet"
 }
 let car2 ={
    color : "black",
    price : "2500000",
    height : "6 feet",
    width : "5 feet"
 }
 let i=0;
 let obj1="";
 let obj2="";

 while (car1[i]){ 
    obj1 += car1[i] ;
    i++;
}
 while (car2[i]){
    obj1 += car2[i];
    i++;
 }

 if(car1 !== car2){
    console.log("true");
 }else{
    console.log("false");
}
  
// Triangular pattern
// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }    
// console.log(string);

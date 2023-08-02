//Q1. Write a JavaScript program that displays the largest integer among two integers.
function largeno(a,b){
    if(a>b)
    return a;
    else
    return b;
}
console.log(largeno(2,5));
console.log(largeno(19,23));
console.log(largeno(19,11));
console.log(largeno(5,2));


//Q2. JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
// let x=2;
// let y=-3;
// let z=7;
//     if ((x>0 && y>0 && z>0) || (x>0 && y<0 && z<0) || (x<0 && y>0 && z<0) || (x<0 && y<0 && z>0) ){
//         console.log ("the sign is +");
//     }
//     else{
//         console.log ("the sign is -");
//     }
     

//Q3. JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
// function sortdescending(x,y,z)
    // if  (x>y && x>z){
    //     if (y>z){
    //         return (x + ", " + y + ", " +z);
    //     }
    //     else{
    //         return (x + ", " + z + ", " +y);
    //     }
    // }
    // else if (y>x && y >z){
    //     if (x>z){
    //         return(y + ", " + x + ", " +z);
    //     }       
    //     else{     
    //         return(y + ", " + z + ", " +x);   
    //     }
    // }        
    // else if (z>x && z>y){
    //     if (x>y){
    //         return(z + ", " + x + ", " +y);
    //     }
    // else{
    //     return(z + ", " + y + ", " +x);
    //     }
    // }

    // console.log(sortdescending(2,5,8));
    // console.log(sortdescending(1,5,3));
    // console.log(sortdescending(9,2,6));
           


//Q4. JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
// function largest(a,b,c,d,e){
//     if (a>b && a>c && a>d && a>e)
//         return a;
//     else if (b>a && b>c && b>d && b>e)
//         return b;
//     else if (c>a && c>b && c>d && c>e)
//         return c;
//     else if (d>a && d>b && d>c && d>e)
//         return d;
//     else if (e>a && e>b && e>c && e>d)
//         return e;
// }

// console.log(largest(2,4,1,6,10));


//Q5.JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// for (i=0; i<=15; i++){
//     if (i%2==0) 
//         console.log(i + "is even");
//     else
//         console.log(i+"is odd");
// }

//Q6. JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.


//Q7. JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".
// for (i=1; i<=100; i++){
//     if ((i%3==0) && (i%5==0))
//         console.log("FizzBuzz");
//     else if(i%3==0) 
//         console.log("Fizz");
//     else if (i%5==0)
//         console.log("Buzz");
//     else 
//         console.log(i);
// }


//Q8. JavaScript program to find and print the first 5 happy numbers.



//Q9. JavaScript program to find the Armstrong numbers of 3 digits.
// let pow=0;
// let plus=0;
// function armstrongno(){
//     pow = (Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3));
//         plus = (i * 100 + j * 10 +  k);
//           if (pow == plus) 
//            return (pow);
// }
// console.log(armstrongno(153))
 


//Q10. JavaScript program to construct the following pattern, using a nested for loop.
// *  
// * *  
// * * *  
// * * * *  
// * * * * * 
// var x,y,chr;
// for(x=1; x <=6; x++)
// {
//    for (y=1; y < x; y++)
//      {
//     chr+=("*");        
//       }
//  console.log(chr);
// //  chr='';    
// }


//Q11. JavaScript program to compute the greatest common divisor (GCD) of two positive integers.


//Q12. JavaScript program to sum 3 and 5 multiples under 1000.
// let sum = 0;
// for (i=0; i<=1000; i++){
//     if ((i%3==0) || (i%5==0))
//       {
//         sum += i;
//       }
// }
// console.log(sum);

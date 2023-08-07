// Q1. Display current day & time
// var today= new Date();
// console.log(today)
// const day= today.getDay();
// console.log(day)
// const daylist=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
// console.log("Today is: "+daylist[day]);



// const folderNames = ["Computer Science","Entertainment","IDE","Java","Resumes"]
// for(i=0;i<folderNames.length; i++){
//     console.log
//     console.log("D:\\"+folderNames[i]);
// let folderName = "Resumes";
// console.log("D:\\"+folderName);

// Q3. JavaScript program to get the current date
//var today= new Date();
// console.log(today);
// var dd= today.getDate();
// var mm= today.getMonth();
// console.log(mm+1);
// var yyyy= today.getFullYear();
// console.log(mm+1 +"/" +dd +"/" +yyyy);



// Q4. JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
// const s1 = 5;
// const s2 = 6;
// const s3 = 7;
// const perimeter = (s1 + s2 + s3)/2;
// const area =  Math.sqrt(perimeter*((perimeter-s1)*(perimeter-s2)*(perimeter-s3)));
// console.log("area is:"+[area]+"cm");

// Q5. JavaScript program to rotate the string 'w3resource' in the right direction




// Q6. JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  
// let yyyy= 2024;
// if ((0 == yyyy % 4) && (0 != yyyy % 100) || (0 == yyyy % 400)) {
//     console.log(yyyy + ' is a leap year');
// } else {
//     console.log(yyyy + ' is not a leap year');
// }


//Q7. JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050. 


// Q8. JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".



//Q9. JavaScript program to calculate the days left before Christmas.  


// Q11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// function cToF(celsius) 
// {
//   var cTemp = celsius;
//   var cToF = cTemp * 9 / 5 + 32;
//     console.log(cTemp+'\xB0C is ' + cToF + ' \xB0F.');
// }

// function fToC(fahrenheit) 
// {
//   var fTemp = fahrenheit;
//   var fToC = (fTemp - 32) * 5 / 9;
//     console.log(fTemp+'\xB0F is ' + fToC + '\xB0C.');
// } 
// cToF(20);
// fToC(33);

//Q12. Write a JavaScript program to get the website URL (loading page). 
//console.log(window.location.href)


// Q13. JavaScript exercise to create a variable using a user-defined name.


// Q14. 


//Q15.JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.  

// function difference(n)
//  {
//     if (n <= 13)
//         return 13 - n;
    
//  }

//  console.log(difference(8));


//Q16. program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.  
// function addTwoint(a,b){
//     if(a!=b)
//     return a+b;
//     else
//     return (a+b)*3;
// }
// console.log(addTwoint(2,7));
// console.log(addTwoint(2,2));

//Q17. JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.  

// function difference(n)
//  {
//   if (n <= 19)
//      return 19 - n;
//   else 
//   return (n-19)*3
    
// }

//  console.log(difference(8))
//  console.log(difference(12))
//  console.log(difference(23))
//  console.log(difference(20))


//Q18.  JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.  

// function check(a,b)
// {
//     if ((a==50 || b==50) || (a+b==50))
//         return true;
//     else 
//         return false;
// }
// console.log(check(20,30));
// console.log(check(22.35))


// Q.19 JavaScript program to check whether a given integer is within 20 of 100 or 400

// function checkrange(a)
// {
//     if ((100-a<=20)|| (400-a<=20))
//      return true;
//     else 
//      return false;
// }
// console.log(checkrange(90));
// console.log(checkrange(380));
// console.log(checkrange(100));
// console.log(checkrange(122));
// console.log(checkrange(95));

//Q20.JavaScript program to check two given integers whether one is positive and another one is negative.  
// function positive_negative(x, y)
// {
//   if ((x < 0 && y > 0) || x > 0 && y < 0) 
//   {
//     return true;
//   }
//   else 
//   {
//     return false;
//   }
// }
// console.log(positive_negative(2, 2));
// console.log(positive_negative(-2, 2));
// console.log(positive_negative(2, -2));
// console.log(positive_negative(-2, -2));

// Q21. JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.  


//Q22. JavaScript program to remove a character at the specified position in a given string and return the modified string.  
// function removeChar(str1, postn)
// {
    
// }


//Q23. JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.


//Q25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7. 
// function checkMultiple(a)
// {
//     if (a%3==0 || a%7==0)
//     return true;
//     else
//     return false;
// }
// console.log(checkMultiple(18))
// console.log(checkMultiple(49))
// console.log(checkMultiple(25))
// console.log(checkMultiple(30))


//Q26. JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.  


//Q27.  JavaScript program to check whether a string starts with 'Java' if it does not otherwise.


//Q28. JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.
// function checkRange(a,b){
//     if (a>=50&&a<=90||b>=50&&b<=90)
//     return true;
//     else
//     return false;
// }
// console.log(50,60);
// console.log(27,33);
// console.log(55,83);
// console.log(90,51);
// console.log(89,78);


//Q30. JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.  


//Q31. JavaScript program to find the largest of three given integers. 
// function largestno(a,b,c){
//     if (a>b&& a>c)
//     return a;
//     else if (b>a && b>c)
//     return b;
//     else 
//     return c;
// }
// console.log (largestno(2,3,4));
// console.log(largestno(55,3,87));
// console.log(largestno(101,119,155));
// console.log(largestno(0,4,3));


//Q32.JavaScript program to find the closest value to 100 from two numerical values.
// function closestno(a,b){
//     if (100-a<100-b)
//     return a;
//     else 
//     return b;
// }
// console.log (closestno(2,3));
// console.log (closestno(82,89));
// console.log (closestno(20,76));
// console.log (closestno(99,45));


//Q33. JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.  
// function checkranges(a, b) {
//     if ((a >= 40 && a <= 60 && b >= 40 && b <= 60) 
//         || 
//         (a >= 70 && a <= 100 && b >= 70 && b <= 100))
//        {
//       return true;
//        } 
//       else 
//        {
//       return false;
//     }
//   }
//   console.log(checkranges(48, 65));
// console.log(checkranges(70, 36));
// console.log(checkranges(55, 29));


//Q34. JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.  
// function max_townums_range(x, y){	
//     if( (x >= 40) && (x <= 60) && (y >= 40 && y <= 60) ){
//     if(x === y){
//     return "Numbers are the same";
//     }else if (x > y){
//     return x;
//     }else{
//     return y;
//     }
//     }else{
//     return "Numbers don't fit in range";
//     }
//     }
    
//     console.log(max_townums_range(45, 60));
//     console.log(max_townums_range(25, 60));
//     console.log(max_townums_range(55, 55));

    //Q35.program to check whether a specified character exists between the 2nd and 4th positions in a given string. 


    //Q36. JavaScript program that checks whether the last digit of three positive integers is the same.  


    //Q37. JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.  


    //Q38. JavaScript program to check a student's total marks in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam" the student will receive A+ grade and total marks must be greater than or equal to 90. If the student gets an A+ grade, return true, otherwise return false.  
//     function exam_status(totmarks,is_exam)
//   {
//   if (is_exam) {
//     return totmarks >= 90;
//   }
//  return (totmarks >= 89 && totmarks <= 100);
//  }

// console.log(exam_status("78", " "));
// console.log(exam_status("89", "true "));
// console.log(exam_status("99", "true "));


//Q39 JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.  
// function sortaSum(x, y) 
//  {
//   const sum_nums = x + y;
//   if (sum_nums >= 50 && sum_nums <= 80) {
//     return 65;
//   }
//   return 80;
// }

// console.log(sortaSum(30,20));
// console.log(sortaSum(90,80));
    

//Q40. JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8. 
// function check(a,b){
//     if (a==8 || b==8 || a+b==8 || a-b==8)
//     return true;
//     else
//     return false
// }
// console.log(check(10,2));
// console.log(check(16,8));
// console.log(check(22,16));
// console.log(check(10,7));

//Q41. JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.
// function three_numbers(x, y, z) {
//     if (x == y && y == z) {
//       return 30;
//     }
  
//     if (x == y || y == z || z == x) {
//       return 40;
//     }
  
//     return 20;
//   }
//   console.log(three_numbers(8, 8, 8));
//   console.log(three_numbers(8, 8, 18));
//   console.log(three_numbers(8, 7, 18));

//Q42. JavaScript program to check whether three given numbers are increasing in strict or in soft mode.  



//Q43. JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.
// function same_last_digit(p, q, r) {
//     return (p % 10 === q % 10) ||
//            (p % 10 === r % 10) ||
//            (q % 10 === r % 10);
           
// }

// console.log(same_last_digit(22,32,42));
// console.log(same_last_digit(102,302,2));
// console.log(same_last_digit(20,22,45));


//Q44. JavaScript program to check from three given integers whether a number is greater than or equal to 20. It is less than the others.  
// function lessby20_others(x, y, z) 
// {
// return (x >= 20 && (x < y || x < z)) ||
// (y >= 20 && (y < x || y < z)) ||
// (z >= 20 && (z < y || z < x));
// }
// console.log(lessby20_others(23, 45, 10));
// console.log(lessby20_others(23, 23, 10));
// console.log(lessby20_others(21, 66, 75));


//Q45. JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15. 
// function test_number(x, y) {
//     return (x === 15 || y === 15 || x + y === 15 || Math.abs(x - y) === 15);
// }

// console.log(test_number(15, 9));
// console.log(test_number(25, 15));
// console.log(test_number(7, 8));
// console.log(test_number(25, 10));
// console.log(test_number(5, 9));
// console.log(test_number(7, 9));
// console.log(test_number(9, 25));


//Q46.  Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11. 
// function valCheck (a, b) {
//     if (!((a % 7 == 0 || a % 11 == 0) && (b % 7 == 0 || b % 11 == 0))) {
//     return ((a % 7 == 0 || a % 11 == 0) || (b % 7 == 0 || b % 11 == 0));
//     }
//     else
//     return false;
//     }
//     console.log(valCheck(14, 21));
//     console.log(valCheck(14, 20));
//     console.log(valCheck(16, 20));


//Q47. JavaScript program to check whether a given number exists in the range 40..10000.  
// function test_digit(n) 
//   {    
//     if (n < 40 || n > 10000)
//       return false;
//     else
//         return true;
      
//   }
// console.log(test_digit(45));  
// console.log(test_digit(320));  
// console.log(test_digit(89)); 


//Q48. JavaScript program to reverse a given string. 


//Q49. JavaScript program to replace every character in a given string with the character following it in the alphabet. 


//Q50. JavaScript program to capitalize the first letter of each word in a given string.  


//Q51. JavaScript program to convert a given number into hours and minutes.

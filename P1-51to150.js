//Q51. JavaScript program to convert a given number into hours and minutes.
// function time_convert(num)
//  { 
//   var hours = Math.floor(num / 60);  
//   var minutes = num % 60;
//   return hours + ":" + minutes;         
// }

// console.log(time_convert(71));
// console.log(time_convert(450));
// console.log(time_convert(1441));


//Q52. JavaScript program to convert letters of a given string alphabetically.  
// function string_arrange(str){
//     return str.split("").sort().join("");
// }
// console.log(string_arrange("monishka"));


//Q53. JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.  
// function abtest(str){
//     if ((/a...b/).test(str)|| (/b...a/).test(str))
//     return true;
//     else 
//     return false;
// }
// console.log(abtest("abcdefbedfaghiba"));


//Q54 JavaScript program to count the number of vowels in a given string.


//Q55. JavaScript program to check whether a given string contains an equal number of p's and t's.  


//Q56. JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.  



//Q57. JavaScript program to create one string of specified copies (positive numbers) of a given string. 
// function string_copies (str, n) 
// {
//   if (n < 0)
//     return false;
//   else
//   return str.repeat(n);
// }
// console.log(string_copies("abc", 5));
// console.log(string_copies("abc", 0));
// console.log(string_copies("abc", -2));


//Q58. JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above. 
// function newstring(str)
// {
//   if (str.length >= 3) {
//     result_str = str.substring(str.length - 3);
//     return result_str + result_str + result_str + result_str;
//   }
//   else
//     return false;
// }
// console.log(newstring("Python 3.0"));
// console.log(newstring("JS"));
// console.log(newstring("JavaScript"));


//Q59. JavaScript program to extract the first half of a even string.  
// function first_half (str) {
//     if (str.length % 2 == 0) {
//       return str.substring(0, str.length / 2);
//     }
//     return str;
//   }
//   console.log(first_half("Python"));  
//   console.log(first_half("JavaScript")); 
//   console.log(first_half("PHP"));


//Q60. JavaScript program to create a new string without the first and last characters of a given string.  
//compare with q59
// function without_first_end(str) {
//     return str.substring(1, str.length - 1);
//   }
//   console.log(without_first_end('JavaScript'));
//   console.log(without_first_end('JS'));
//   console.log(without_first_end('PHP'));
  

//Q61. JavaScript program to concatenate two strings except for their first character.
// function concatenate(str1, str2) {
//     str1 = str1.substring(1, str1.length);
//     str2 = str2.substring(1, str2.length);
//     return str1 + str2;
//   }
  
//   console.log(concatenate("PHP","JS"));
//   console.log(concatenate("A","B"));
//   console.log(concatenate("AA","BB"));
  

//Q62. JavaScript program to move the last three characters to the start of a given string. The string length must be greater than or equal to three.  
// function right_three(str) {
//     if (str.length > 1)
//       {
//         return str.slice(-3) + str.slice(0, -3);
//       }
//  return str;
// }
// console.log(right_three("Python"));
// console.log(right_three("JavaScript"));
// console.log(right_three("Hi"));


//Q63. JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater than or equal to three.
// function middle_three(str) {
//     if (str.length % 2!= 0) {
    
//      mid = (str.length + 1)/2;
//      return str.slice(mid - 2, mid + 1);
//      }
//    return str;
//  }
//  console.log(middle_three('abcdefg'));
//  console.log(middle_three('HTML5'));
//  console.log(middle_three('Python'));
//  console.log(middle_three('PHP'));
//  console.log(middle_three('Exercises'));


 //Q64. JavaScript program to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string.  

 
//Q65. JavaScript program to test whether a string ends with "Script". The string length must be greater than or equal to 6.  


//Q66. JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.
// function city_name(str) {
//     if (str.length >= 3 && ((str.substring(0, 3) == 'Los') || (str.substring(0, 3) == 'New')))
     
//         {
//             return str;
//       }
  
//     return '';
//   }
  
//   console.log(city_name("New York"));
//   console.log(city_name("Los Angeles"));
//   console.log(city_name("London"));


//Q67. JavaScript program to create a new string from a given string. This program removes the first and last characters of the string if the first or last character is 'P'. Return the original string if the condition is not satisfied.  
//function nop(str) {
//     let start_pos = 0;
//     let end_pos = str.length;
  
//     if (str.length > 0 && str.charAt(0) == 'P') 
//       { 
//         start_pos = 1; 
//       }
  
//     if (str.length > 1 && str.charAt(str.length - 1) == 'P') 
//     {
//       end_pos--;
//     }
  
//     return str.substring(start_pos, end_pos);
//   }
  
//   console.log(nop("PythonP"));
//   console.log(nop("Python"));
//   console.log(nop("JavaScript"));


//Q68. JavaScript program to create a new string using the first and last n characters from a given string. The string length must be larger than or equal to n.  


//Q69. JavaScript program to compute the sum of three elements of a given array of integers of length 3.  
// function sum_three(a,b,c)
// {
//   return a + b + c;
// }

// console.log(sum_three([10, 32, 20]));  
// console.log(sum_three([5, 7, 9])); 
// console.log(sum_three([0, 8, -11]));


//Q70. JavaScript program to rotate the elements left in a given array of integers of length 3.  


//Q71. JavaScript program to check whether 1 appears in the first or last position of a given array of integers. The array length must be larger than or equal to 1. 


//Q72. JavaScript program to check whether the first and last elements are the same in a given array of integers of length 3.  
// function first_last_same(nums)
//    {
//     var end = nums.length - 1;
//     if (nums.length >= 1){
//        nums[0] == nums[end]
//        return true;
//     } else {return false;}
// }

// console.log(first_last_same([10, 20, 30])); 
// console.log(first_last_same([10, 20, 30, 10])); 
// console.log(first_last_same([20, 20, 20])); 

//Q73. JavaScript program to reverse the elements of a given array of integers of length 3.  
// function reverse(array){
//     return [array[2], array[1], array[0]];
// }
// console.log(reverse([5, 4, 3])); 
// console.log(reverse([1, 0, -1]));  
// console.log(reverse([2, 3, 1]));

//Q74. JavaScript program to find the largest value between the first and last elements and set all the other elements to that value. Display the updated array.  
// function all_max(nums) 
//  {
//     var max_val = nums[0] > nums[2] ? nums[0] : nums[2];

//     nums[0] = max_val;
//     nums[1] = max_val;
//     nums[2] = max_val;

//     return nums;
// }
// console.log(all_max([20, 30, 40]));
// console.log(all_max([-7, -9, 0]));
// console.log(all_max([12, 10, 3]));


//Q75. JavaScript program to create an array taking the middle elements of the two arrays of integer and each length 3.


//Q76.JavaScript program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1.  


//Q77. JavaScript program to test whether an array of integers of length 2 contains 1 or 3.  
//what does indexof do

//Q78. JavaScript program to test whether an array of integers of length 2 does not contain 1 or 3.  
// function twice3040(arra1) {
//     let a = arra1[0],
//         b = arra1[1];
//     return (a === 30 && b === 30) || (a === 40 && b === 40);
// }

// console.log(twice3040([30, 30]));
// console.log(twice3040([40, 40]));
// console.log(twice3040([20, 20]));
// console.log(twice3040([30]));
//explain ===

//Q79. JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.  
// function twice3040(arra1) {
//     let a = arra1[0],
//         b = arra1[1];
//     return (a === 30 && b === 30) || (a === 40 && b === 40);
// }

// console.log(twice3040([30, 30]));
// console.log(twice3040([40, 40]));
// console.log(twice3040([20, 20]));
// console.log(twice3040([30]));


//Q80. JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.  


//Q81. JavaScript program to add two digits to a given positive integer of length two.  


//Q82. JavaScript program to add two positive integers without carrying.  


//Q83.JavaScript program to find the longest string from a given array of strings.
// function longest_string(str_ara) {
//     var max = str_ara[0].length;
//     str_ara.map(v => max = Math.max(max, v.length));
//     result = str_ara.filter(v => v.length == max);
//     return result;
//   }
  
//   console.log(longest_string(['a', 'aa', 'aaa','aaaaa','aaaa']))


//Q84. JavaScript program to replace each character in a given string with the next in the English alphabet.  
//Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.


//Q85.JavaScript program to divide a given array of positive integers into two parts. First element belongs to the first part, second element belongs to the second part, and third element belongs to the first part and so on. Now compute the sum of two parts and store it in an array of size two.  


//Q86. JavaScript program to find the types of a given angle.
//   function angle_Type(angle) {
//     if(angle < 90) {
//       return "Acute angle.";
//     }
//     if(angle === 90) {
//       return "Right angle.";
//     }
//     if(angle < 180) {
//       return "Obtuse angle.";
//     }
//     return "Straight angle.";
//   }
  
//   console.log(angle_Type(47))
//   console.log(angle_Type(90))
//   console.log(angle_Type(145))
//   console.log(angle_Type(180))


//Q87.JavaScript program to determine if two arrays of integers of the same length are similar. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.  


//Q88. JavaScript program that takes two integers and a divisor. If the given divisor divides both integers and does not divide either, two specified integers are similar. Check whether two integers are similar or not.  
// function checking_numbers(x, y, divisor) {
//     if(x % divisor === 0 && y % divisor === 0 || x % divisor !== 0 && y % divisor !==
//       0) {
//       return true;
//     }
//     return false;
//   }
  
//   console.log(checking_numbers(10, 25, 5))
//   console.log(checking_numbers(10, 20, 5))
//   console.log(checking_numbers(10, 20, 4))

//Q89.  JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.  
//explain ques

//Q90. JavaScript program to find the kth greatest element in a given array of integers. 


//Q91. JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order) in a given array of positive integers. 


//Q92. JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers. 


//Q93.  JavaScript program to find the maximum difference among all possible pairs of a given array of integers. 


//Q94. JavaScript program to find the number appearing most frequently in a given array of integers.


//Q95. JavaScript program to replace all numbers with a specified number in an array of integers. 
// function array_element_replace(arr, old_value, new_value) {
//     for (var i = 0; i < arr.length; i++) {
//       if (arr[i] === old_value) {
//         arr[i] = new_value; //explain
//       }
//     }
//     return arr;
//   }
//   num = [1, 2, 3, 2, 2, 8, 1, 9]; //explain
//   console.log("Original Array: "+num);
//   console.log(array_element_replace(num, 2, 5));
  

//Q96. JavaScript program to compute the sum of the absolute differences of consecutive numbers in a given array of integers. 
// function sum_adjacent_difference(arr) {
// 	var result = 0;
// 	for (var i = 1; i < arr.length; i++) {
// 		result += Math.abs(arr[i] - arr[i - 1]);
// 	}
// 	return result;
// }

// console.log(sum_adjacent_difference([1, 2, 3, 2, -5]));

//Q97. JavaScript program to find the shortest possible string. This can be converted into a string and converted into a palindrome by adding characters to the end of it. 


//Q98. JavaScript program to change the case of the minimum number of letters to make a given string written in upper case or lower case. 


//Q99. JavaScript program to check whether it is possible to rearrange the characters of a given string. This is in such a way that it will become equal to another given string.


//Q100. JavaScript program to check if there is at least one element in two given sorted arrays of integers. 


//Q101. JavaScript program to check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions. 


//Q102. JavaScript program to find the number of inversions of a given array of integers. 
//Note: Two elements of the array a stored at positions i and j form an inversion if a[i] > a[j] and i < j.


//Q103. JavaScript program to find the maximum number of a given positive integer by deleting exactly one digit of the given number. 


//Q104. JavaScript program to find two elements of an array such that their absolute difference is not larger than a given integer. However, it is as close as possible to the integer.
// function different_values(ara, n) {
//     var max_val = -1;
//     for (var i = 0; i < ara.length; i++) {
//         for (var j = i + 1; j < ara.length; j++) {
//             var x = Math.abs(ara[i] - ara[j]);
//             if (x <= n) {
//                 max_val = Math.max(max_val, x)
//             }
//         }
//     }
//     return max_val
// }
// console.log(different_values([12, 10, 33, 34], 10));
// console.log(different_values([12, 10, 33, 34], 24));
// console.log(different_values([12, 10, 33, 44], 40));

//Q105. JavaScript program to find the number of times to replace a given number with the sum of its digits. This is until it converts to a single-digit number.

//Q106.  JavaScript program to divide an integer by another integer as long as the result is an integer and return the result. 
// function divide_digit(num, d) {
//     if (d==1)
//       return num;
//     else
//     {
//    while (num % d === 0) {
//      num /= d;
//      }
//  return num;
//     }
// }
// console.log(divide_digit(-12, 2))
// console.log(divide_digit(13, 2))
// console.log(divide_digit(13, 1))


//Q107. avaScript program to find the number of sorted pairs formed by arrays of integers. This is such that one element in the pair is divisible by the other one. 
//explain ques


//Q108. JavaScript program to create the dot products of two given 3D vectors. 
//explain ques


//Q109. JavaScript program to sort an array of all prime numbers between 1 and a given integer. 
function primesort(num){
    for (i=1; i<=num; i++) {
        if (i==1)
            return true;
        else if (i==2)
            return true;
        else if (i>2 && i%2!=0)
            return true;
        else 
            return false;
    }
    // return num;
}
     
console.log(primesort(4));
console.log(primesort(13));
console.log(primesort(25));
console.log(primesort(18));


//Q110.JavaScript program to find the number of even values in sequence before the first occurrence of a given number. 
// function find_numbers(arr_num, num) {
//     var result = 0;
//     for (var i = 0; i < arr_num.length; i++)
//     {
//         if (arr_num[i] % 2 === 0 && arr_num[i] !== num) {
//             result++;
//         }
//         if (arr_num[i] === num) 
//         {
//             return result;
//         } //explain this loop
//     }
//     return -1;
// }

// console.log(find_numbers([1,2,3,4,5,6,7,8], 5))
// console.log(find_numbers([1,3,5,6,7,8], 6))


//Q111. JavaScript program to check a number from three given numbers where two numbers are equal. Find the third one.
// function find_third_number(x, y, z) {
//     if((x!==y) && (x!==z) && (y!==z))
//      return "Three numbers are unequal.";
//      if(x==y) return z;
//      if(x==z) return y;
//      return x;
//  }
 
//  console.log(find_third_number(1,2,2))
//  console.log(find_third_number(1,1,2))
//  console.log(find_third_number(1,2,3))


//Q112. JavaScript program to find the number of trailing zeros in the decimal representation of the factorial of a given number. 

//Q118. JavaScript program to check whether a given number is in a given range.
// function is_inrange(x, y, z) 
// {
//     return y >= x && y <= z;
// }

// console.log(is_inrange(1,2,3));
// console.log(is_inrange(1,2,-3));
// console.log(is_inrange(1.1,1.2,1.3));


//Q120.Write a JavaScript program to check if a point lies strictly inside the circle. 
// Input:
// Center of the circle (x, y)
// Radius of circle: r
// Point inside a circle (a, b)

//Q121. JavaScript program to check whether a given matrix is lower triangular or not. 
//Note: A square matrix is called lower triangular if all the entries above the main diagonal are zero.
//explain ques

//Q122. JavaScript program to check whether a given array of integers represents a strictly increasing or decreasing sequence. 
// function is_monotonous(num) {
//     if (num.length === 1) {
//         return true;
//     }
//     var num_direction = num[1] - num[0];
//     for (var i = 0; i < num.length - 1; i++) {
//         if (num_direction * (num[i + 1] - num[i]) <= 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(is_monotonous([1, 2, 3]));
// console.log(is_monotonous([1, 2, 2]))
// console.log(is_monotonous([-3, -2, -1]))


//Q123. JavaScript program to find out if the members of a given array of integers are a permutation of numbers from 1 to a given integer. 


//Q127.  Write a JavaScript program to reverse the order of bits in a integer. 
// 14 -> 00001110 -> 01110000 -> 112
// 56 -> 00111000 -> 00011100 -> 28
// 234 -> 11101010 -> 01010111 -> 87



//Q128. JavaScript program to find the smallest round number not less than a given value. 
//Note: A round number is informally considered to be an integer that ends with one or more zeros.[3] So, 590 is rounder than 592, but 590 is less round than 600.
// function nearest_round_number(num) {
//     while (num % 10) {
//         num++;
//     }
//     return num;
// }

// console.log(nearest_round_number(56));
// console.log(nearest_round_number(592));


//Q131. JavaScript program to create an array of prefix sums of the given array. 
// In computer science, the prefix sum, cumulative sum, inclusive scan, or simply scan of a sequence of numbers x0, x1, x2, ... is a second sequence of numbers y0, y1, y2, ..., the sums of prefixes of the input sequence:
// y0 = x0
// y1 = x0 + x1
// y2 = x0 + x1+ x2

//Q132. JavaScript program to check whether a given fraction is proper or not.
// function proper_improper_test(num) {
//     if (Math.abs(num[0] / num[1]) < 1)
//        return "Proper fraction.";
//     else
//     return "Improper fraction.";
//   }
//   console.log(proper_improper_test([12, 300]));
//   console.log(proper_improper_test([2, 4]));
//   console.log(proper_improper_test([103, 3]));
//   console.log(proper_improper_test([104, 2]));
//   console.log(proper_improper_test([5, 40]));

//Q136. Write a JavaScript program to replace the first digit in a string (should have at least one digit) with the $ character. 



//Q137. JavaScript program to test whether a given integer is greater than 15 and return the given number, otherwise return 15. 
// function check15(a){
//     if (a>15)
//     return a;
//     else 
//     return 15;
// }
// console.log(check15(45));
// console.log(check15(12));

//Q138.JavaScript program to reverse the bits of a given 16-bit unsigned short integer. 


//Q139.JavaScript program to find the position of the rightmost round number in an array of integers. If there are no round numbers, the function returns 0.  
//Note: A round number is informally considered to be an integer that ends with one or more zeros

//Q140: JavaScript program to check whether all the digits in a given number are the same or not.  

//Q141. JavaScript program to find the number of elements in both arrays.  
// function test_same_elements_both_arrays(arra1, arra2) {
//     var result = 0;
//     for(var i = 0; i < arra1.length; i++) {
//       for(var j = 0; j < arra2.length; j++){
//         if(arra1[i] === arra2[j])
//         {
//           result++;
//         }
//       }
//     }
//     return result;
//   }
//   console.log(test_same_elements_both_arrays([1,2,3,4], [1,2,3,4]));
//   console.log(test_same_elements_both_arrays([1,2,3,4], [1,2,3,5]));
//   console.log(test_same_elements_both_arrays([1,2,3,4], [11,22,33,44]));

  
//Q142.  JavaScript program to simplify a given absolute path for a file in Unix-style. 
//explain ques


//Q143. JavaScript program to sort the strings of a given array of strings in order of increasing length.  
//Note: Do not change the order if the lengths of two string are same.


//Q144. JavaScript program to break an URL address and put its parts into an array.  
//Note: url structure : ://.org[/] and there may be no part in the address.

//Q145 ask

//Q146.JavaScript program to compute the sum of cubes of all integers from 1 to a given integer.
// function sum_Of_Cubes(n) {
//     var sumn = 0;
  
//     for (var i = 1; i <= n; i++) {
//       sumn += Math.pow(i, 3);
//     }
//     return sumn;
//   }
  
//   console.log(sum_Of_Cubes(3));
//   console.log(sum_Of_Cubes(4));

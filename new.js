let str="abdcefs";
let rev="";
    for (i=str.length-1; i>=0; i--){
        console.log(str[i]);
        rev+=str[i]
    }  
    if(str == rev)
        console.log("A Pallindrome")
    else
        console.log("Not a Pallindrome")
        
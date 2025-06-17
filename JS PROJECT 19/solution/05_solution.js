// 5).The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

let str = "AEIOU";

function vowelcount(str)
{
    let  arr = ["a", "e","i","o","u","A","E","I","O","U"];
    let count = 0 ;
          for(let i=0;i<str.length;i++)  
          {
              if (arr.includes(str[i]))
              {
                  console.log("vowel found");
                  count++;

              }
              else{
                console.log("vowel not found");
                
              }
          }

          console.log("total vowels: " + count);
}
vowelcount(str);

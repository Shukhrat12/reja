/*E-TASK: 

Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
MASALAN: getReverse("hello") return qilsin "olleh"

@MITASK
*/

// Reverse a string. 
function getReverse(str) {
  let result = "";
  for(let i=str.length-1; i>=0; i--) {
    result = result + str[i]
  }
  return result;
}

const result = getReverse("hello")
console.log(result)
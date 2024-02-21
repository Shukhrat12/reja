/*F-TASK: 

Shunday findDoublers function tuzing, unga faqat bitta string argument pass bolib, agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
MASALAN: getReverse("hello") return true return qiladi

@MITASK
*/

function findDuplicates(str) {
  let count = 0;
  const result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i+1; j < str.length; j++) {
      if(str[i] === str[j]) {
        count++
        result.push(str[i])
        console.log(result)
      }
    }
  }
  if (count>0) {
    return true
  } else {
    return false
  }
  
}

const result = findDuplicates("helloo")
console.log(result)

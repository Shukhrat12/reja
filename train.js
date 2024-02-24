/*G-TASK: 

Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 22, 8]) return qiladi 1 sonini.

@MITASK
*/

// 1. Shunday function tuzingki unga integerlardan iborat array pass bolsin
// 2. Bitta yangi max deb nomlangan variable create qilamiz va 0 index dagi array elementini solamiz
// 3. Yana bitta yangi maxIndex degan variable yaratamiz va boshlang'ich qiymatini 0 ga tenglaymiz
// 4. Arrayni loop qilamiz
// 5. Loop qilayotgan har bir array elementini max bilan solishtirib max dan kattami yo'qmi tekshiramiz
// 6. Agar max dan katta bo'lsa, max ga o'sha array elementini qiymatini tenglaymiz
// 7. Index ni ya'ni i ni maxIndex ga tenglaymiz
// 6. Loopdan tashqariga chiqib maxIndex ni return qilamiz

function getHighestIndex(arr) {
  let max = arr[0];
  let maxIndex = 0
  for(let i=0; i<arr.length; i++) {
    if(max < arr[i]) {
      max = arr[i]
      maxIndex = i
    }
  }
  return maxIndex
}

const a = [5, 21, 20000, 12, 80000, 9000];
const maximumIndex = getHighestIndex(a)
console.log(maximumIndex)
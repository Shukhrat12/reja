/*D-TASK: 

Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

@MITASK
*/

function checkContent(str1, str2) {
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');
  return sortedStr1 === sortedStr2;
}
if (checkContent("mitgroup", "gmtiprou")) {
  console.log("Har ikkala string bir hil harflardan iborat");
} else {
  console.log("Har ikkala string bir hil harflardan iborat emas");
}
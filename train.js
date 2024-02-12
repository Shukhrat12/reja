// A-TASK:

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

// Logic:
// 1. Iterate the letters of the string given in the parameter of the function
// 2. Write a condition to check if each letter matches with the letter given as a parameter of the function
// 3. If it matches increment the counter by one, else continue to loop
// 4. Return the counter

// Implementation method 1 - with for loop:
// function findLetterOccurence(letter, word) {
//     let count = 0;
//     for(let i=0; i<word.length; i++) {
//         if(word[i] == letter) {
//             count++
//         }
//     }
//     return count;
// }
// const count = findLetterOccurence("e", "engineer")
// console.log(count)


// Implementation method 2 - with map() method:
// function countLetter(xarf, soz) {
//     let count = 0;
//     soz.split("").map((ele) => ele === xarf ? count++ : null)
//     return count
//   }
//   const result = countLetter("e", "engineer")
//   console.log(result)


// ===================================================================================

// Synchronous functions

// console.log("Jack Ma Advice: ");
// const list = [
//   "Before 20 years old, be a good student, do more mistakes.",
//   "Before 30 years old, follow somebody. Go to a small company, you learn the passion, you learn to dream. It is not which company you go, it is which boss you follow.",
//   "Between 30 and 40 years old, work for yourself. Time to be an entrepreneur.",
//   "Between 40 and 50 years old, do the thing you are good at. It is too late to do something new.",
//   "When you are 50 to 60 years old, work for the young people.",
//   "When you are over 60, spend time for yourself. Go to the beach!",
// ];

// Callback functions

// function maslahatBering(age, callBack) {
//   if (typeof age !== "number") callBack("Parameter is not a number!", null);
//   else if (age <= 20) {
//     callBack(null, list[0]);
//   } else if (age > 20 && age < 30) {
//     callBack(null, list[1]);
//   } else if (age < 30 && age < 40) {
//     callBack(null, list[2]);
//   } else if (age < 40 && age < 50) {
//     callBack(null, list[3]);
//   } else if (age > 40 && age < 50) {
//     callBack(null, list[4]);
//   } else {
//     setTimeout(() => {
//         callBack(null, list[5]);
//     }, 5000)

//   }
// }

// console.log("passed here 0")

// maslahatBering(65, (err, data) => {
//     if(err) console.log('ERROR:', err)
//     else console.log("Javob: " + data)
// });

// console.log("passed here 1")

// Async functions

// async function maslahatBering(age) {
//   if (typeof age !== "number") throw new Error("Parameter is not a number!");
//   else if (age <= 20) return list[0];
//   else if (age > 20 && age < 30) return list[1];
//   else if (age < 30 && age < 40) return list[2];
//   else if (age < 40 && age < 50) return list[3];
//   else if (age > 40 && age < 50) return list[4];
//   else {
//     return list[5];
//     // setTimeout(() => {
//     //   return(null, list[5]);
//     // }, 5000);
//   }
// }

// then & catch
// console.log("passed here 0");

// maslahatBering(65)
// .then((data) => {
//   console.log("javob: ", data)
// })
// .catch((err) => {
//     console.log("ERROR: ", err);
// });

// console.log("passed here 1");

// async & await
// async function run() {
//     let javob = await maslahatBering(20)
//     console.log(javob)
//     javob = await maslahatBering(31)
//     console.log(javob)
//     javob = await maslahatBering(41)
//     console.log(javob)
// }

// run()

// Promise functions

// async function maslahatBering(age) {
//   if (typeof age !== "number") throw new Error("Parameter is not a number!");
//   else if (age <= 20) return list[0];
//   else if (age > 20 && age < 30) return list[1];
//   else if (age < 30 && age < 40) return list[2];
//   else if (age < 40 && age < 50) return list[3];
//   else if (age > 40 && age < 50) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           resolve(list[5]);
//         }, 5000);
//     })     
//   }
// }

// // async & await
// async function run() {
//     let javob = await maslahatBering(25)
//     console.log(javob)
//     javob = await maslahatBering(71)
//     console.log(javob)
//     javob = await maslahatBering(100)
//     console.log(javob)
// }

// run()

// Challenge task 1

// const animal_list = ['ant', 'bat', 'bird', 'cat', 'cock', 'cow', 'dog', 'duck', 'deer', 'fox', 'frog', 'goat', 'hen', 'mole', 'tiger', 'lion', 'monkey', 'elephant', 'wolf'];

// Task
// Print the animals from the animal_list array that has matching letters in the given string as an input
// 
// Method 1 
// Loop the given string, get each letter 
// Find the animals that starts with that letter
// Loop the each animal letters of that new list of animals
// Check if each letter exists in the given string
// If it exists, print that animal name

// Method 2
// loop and get the each element of animal_list array
// check if each letter of the array element included in the given string
// if it returns the same amount of the length of array element
// then print it
//
// Implementation for method 2:

// function findAnimals(txt) {
//     let count;
//     let letters
//     for(let i=0; i<animal_list.length; i++) {
//        letters = animal_list[i].split("")
//        count = 0;
//        for(let j=0; j<letters.length; j++) {
//         if(txt.includes(letters[j])) {
//             count++
//         }
//        }
//        if(count == letters.length) {
//         console.log(animal_list[i])
//        }
//     }
// }

// findAnimals('dgoat');

// B-TASK: 

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

// Logic
// 1. Loop and get each string characters 
// 2. replace all non-numeric characters with empty string
// 3. print the length of the result variable

// function countDigits(str) {
//     let res
//     for(let i=0; i<str.length; i++) {
//         res = str.replace(/\D/g, "");
//     }
//     console.log(res.length)
// }
// const countOfDig = countDigits("ad2a54y79wet0sfgb9")

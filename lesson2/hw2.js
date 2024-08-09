/*--------------------1------------------*/

// let arr = [ 12, 62, -54, 9042, 3, 'hello', 'good', 'can', true, false ];
// console.log(arr);

/*--------------------2------------------*/

// let firstbook = {
//     title: 'Crooked House',
//     pageCount: 256,
//     genre: 'novel',
// };
// let secondbook = {
//     title: 'The Great Gatsby',
//     pageCount: 180,
//     genre: 'Tragedy',
// };
// let thirdbook = {
//     title: 'To Kill a Mockingbird',
//     pageCount: 281,
//     genre: 'Fiction',
// };

/*--------------------3------------------*/

// let firstbook = {
//     title: 'Crooked House',
//     pageCount: 256,
//     genre: 'novel',
//     authors: [
//         {name: 'Agatha Christie', age: 86,}
//     ],
// };
// let secondbook = {
//     title: 'The Great Gatsby',
//     pageCount: 180,
//     genre: 'Tragedy',
//     authors: [
//         {name: 'F. Scott Fitzgerald', age: 44,}
//     ],
// };
// let thirdbook = {
//     title: 'To Kill a Mockingbird',
//     pageCount: 281,
//     genre: 'Fiction',
//     authors: [
//         {name: 'Harper Lee', age: 89,}
//     ],
// };

/*--------------------4------------------*/
//
// let users = [
//     { name: 'Anna', username: 'ann', password: 237,},
//     { name: 'James', username: 'jam', password: 852,},
//     { name: 'Michael', username: 'mic', password: 765,},
//     { name: 'William', username: 'wil', password: 967,},
//     { name: 'Steven', username: 'ste', password: 286,},
//     { name: 'Jack', username: 'jac', password: 467,},
//     { name: 'Charlotte', username: 'cha', password: 375,},
//     { name: 'Daniel', username: 'dan', password: 207,},
//     { name: 'Ronald', username: 'ron', password: 175,},
//     { name: 'Jeffrey', username: 'jaf', password: 841,},
// ];
// console.log(users[0].password);
// console.log(users[1].password);
// console.log(users[2].password);
// console.log(users[3].password);
// console.log(users[4].password);
// console.log(users[5].password);
// console.log(users[6].password);
// console.log(users[7].password);
// console.log(users[8].password);
// console.log(users[9].password);

/*--------------------5------------------*/

// let weather = [
//     {morning: 10, afternoon: 22, evening: 15,}
//     {morning: 12, afternoon: 25, evening: 13,}
//     {morning: 15, afternoon: 28, evening: 16,}
//     {morning: 13, afternoon: 26, evening: 14,}
//     {morning: 9, afternoon: 20, evening: 12,}
//     {morning: 10, afternoon: 22, evening: 17,}
//     {morning: 11, afternoon: 3, evening: 13,}
// ];

/*--------------------6------------------*/
//
// let x = 1;
// x = 0;
// x = -3;
//
// if(x!=0){
//     console.log('Вірно')
// }else{
//     console.log('Невірно')
// };


/*--------------------7------------------*/

// let time = 12;
//
// if (time > 0 && time <= 15) {
//     console.log('Перша чверть');
// } else if (time > 15 && time <= 30) {
//     console.log('Друга чверть');
// } else if (time > 30 && time <= 45) {
//     console.log('Третя чверть');
// } else if (time > 45 && time <= 59) {
//     console.log('Четверта чверть');
// }else{
//     console.log('??????');
// }

/*--------------------8------------------*/

// let day = 13;
//
// if (day > 0 && day <= 10) {
//     console.log('Перша чверть');
// } else if (day > 10 && day <= 20) {
//     console.log('Друга чверть');
// } else if (day > 20 && day <= 30) {
//     console.log('Третя чверть');
// }else{
//     console.log('??????');
// }

/*--------------------9------------------*/

// let schedule = +prompt('Введіть порядковий номер дня тижня');
// switch (schedule){
//     case 1: {
//         console.log('Monday');
//         break;
//     }
//     case 2: {
//         console.log('Tuesday');
//         break;
//     }
//     case 3: {
//         console.log('Wednesday');
//         break;
//     }
//     case 4: {
//         console.log('Thursday');
//         break;
//     }
//     case 5: {
//         console.log('Friday');
//         break;
//     }
//     case 6: {
//         console.log('Saturday');
//         break;
//     }
//     case 7: {
//         console.log('Sunday');
//         break;
//     }
// }

/*--------------------10------------------*/

// let num1 = +prompt('Введіть перше число');
// let num2 = +prompt('Введіть друге число');
// if (num1 > num2){
//     console.log('Перше число більше');
// } else if (num2 > num1){
//     console.log('Друге число більше');
// }else if(num1 === num2){
//     console.log('Числа рівні');
// }else{
//     console.log('??????');
// }


/*--------------------11------------------*/
//
// let x = null;
// if (x){
//     console.log(x);
// }else{
//     x = 'default';
//     console.log(x);
// }

/*--------------------12------------------*/
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// if(coursesAndDurationArray[0].monthDuration>5){
//     console.log('Супер')
// }
// if(coursesAndDurationArray[1].monthDuration>5){
//     console.log('Супер')
// }
// if(coursesAndDurationArray[2].monthDuration>5){
//     console.log('Супер')
// }
// if(coursesAndDurationArray[3].monthDuration>5){
//     console.log('Супер')
// }
// if(coursesAndDurationArray[4].monthDuration>5){
//     console.log('Супер')
// }
// if(coursesAndDurationArray[5].monthDuration>5){
//     console.log('Супер')
// }
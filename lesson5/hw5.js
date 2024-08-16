/*--------------------1------------------*/
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let calc = (a, b) => a * b;
// console.log(calc(2, 4));

/*--------------------2------------------*/
// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let calc = (r) => Math.PI * Math.pow(r, 2);
// console.log(calc(2));

/*--------------------3------------------*/
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let calc = (h, r) => 2 * Math.PI * r * (h + r);
// console.log(calc(5, 3));

/*--------------------4------------------*/
// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = (arr) => {for (let i = 0; i < arr.length; i++) {   console.log(arr[i])}}
// let f = [1,2,3,4,5,6,7];
// array(f);

/*--------------------5------------------*/
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

// let text = (p) => {
//     document.write(`<p> ${p} </p>`);
// };
// text('okefkeokf');

/*--------------------6------------------*/
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

// let list = (li) => {
//     document.write(`<ul>
//                         <li> ${li} </li>
//                         <li> ${li} </li>
//                         <li> ${li} </li>
//                     </ul>`);
// };
// list('isvsio ekfcjnsef');

/*--------------------7------------------*/
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом,
// який є числовим (тут використовувати цикл) та виводить його через document.write

// let list = (li,num) =>{
//     document.write(`<ul>`)
//     for (let i = 0; i <num; i++) {
//         document.write(` <li> ${li} </li>`)
//     }
//     document.write(`</ul>`)
// };
// list('koefkpef eved', 4);

/*--------------------8------------------*/
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

// let list = (arr) => {
//     document.write(`<ul>`);
//       for (let i = 0; i <arr.length; i++) {
//                document.write(` <li> ${arr[i]} </li>`)
//       }
//      document.write(`</ul>`);
// };
// let a = [1,2,3,'f',true,'k',7,false,true,'r',8];
// list(a);

/*--------------------9------------------*/
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let object = (arr) => {
//     for (let arrElement of arr) {
//         document.write(`<div> ${arrElement.id} ${arrElement.name} ${arrElement.age} </div>`)
//     }
// };
// let a=[
//     {id:1, name:'A', age:32 },
//     {id:2, name:'B', age:14 },
//     {id:3, name:'C', age:72 },
//     {id:4, name:'D', age:23 }
// ];
// object(a);

/*--------------------10------------------*/
// - створити функцію яка повертає найменьше число з масиву

// let num = (arr) => {
//     let k=arr[0];
//     for (const arrElement of arr) {
//         if (k>arrElement){
//             k=arrElement
//         }
//     }
//     return k
// };
// let a = [13,7,16,9,2,58,24,5];
// console.log(num(a));

/*--------------------11------------------*/
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// let sum = (arr) => {
//     let sum = 0;
//     for (let arrElement of arr) {
//         sum = sum + arrElement;
//     }
//     return sum
// }
// let array=[1,4,14,85,24,9,34];
// let k = sum(array);
// document.write(k);

/*--------------------12------------------*/
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// let swap = (arr, index1, index2) =>{
//     [arr[index1], arr[index2]]=[ arr[index2], arr[index1]];
//     return arr
// }
// let array = [1,2,3,4,5];
// swap(array, 0, 2);

/*--------------------13------------------*/
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

// let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
//     let result = 0
//     if (exchangeCurrency === 'USD'){
//         result = sumUAH / currencyValues[0].value;
//     }else if (exchangeCurrency === 'EUR'){
//         result = sumUAH / currencyValues[1].value;
//     }
//     return result
// }
// let values = [
//     {currency:'USD',value:25},
//     {currency:'EUR',value:42}
// ];
//
// document.write(exchange(10000, values,'USD'));

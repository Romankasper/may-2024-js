/*--------------------1------------------*/
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

// let but = document.getElementsByClassName('a')
// but[0].onclick= function (){
//     let b = document.getElementById('text');
//     b.style.display='none'
// }

/*--------------------2------------------*/
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та
// перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let form1 = document.form1
// form1.onsubmit=function (event){
//     event.preventDefault()
// }
//
// let but = document.getElementsByClassName('b')
// let input = document.getElementsByClassName('inp1')
// but[0].onclick = function (){
//
//     if (+input[0].value<18){
//         console.log('your age is less than 18')
//     }else if (+input[0].value>18){
//         console.log('you are older than 18')
//     }else if (+input[0].value===18){
//         console.log('you are 18')
//     }
// }

/*--------------------3------------------*/
// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

// let form2 = document.form2;
//
// let div = document.getElementById('user');
//
// form2.onsubmit=function (event){
//     event.preventDefault()
//
//     let nameVa = document.form2.name.value;
//     let surnameVa = document.form2.surname.value;
//     let ageVa = document.form2.age.value;
//     let arr = {nameVa,surnameVa,ageVa}
//     div.innerText=div.innerText + arr.nameVa + ' ' + arr.surnameVa + ' ' + arr.ageVa;
//
// };

/*--------------------4------------------*/
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

// let a = +localStorage.getItem('reload');
// a+=1;
// localStorage.setItem('reload',a);
//
// document.getElementsByClassName('load')[0].innerText = a;

/*--------------------6------------------*/
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

// let result = document.createElement("div");
// document.body.append(result)
//
// let form3 = document.form3;
// form3.onsubmit=function (event){
//         event.preventDefault()
// }
// let input = document.form3.weight
// input.oninput=function (kg){
//         result.innerText=' ';
//         let p= kg.data * 2.2046
//         result.append(p)
// }

/*--------------------7------------------*/
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

// let a = [
//     {name:'a',age:14},
//     {name:'b',age:71},
//     {name:'c',age:28}
// ]
//
// localStorage.setItem('one', JSON.stringify(a))
//
// function addToLocalStorage(arrayName,objToAdd){
//     let arr = JSON.parse(localStorage.getItem(arrayName));
//     arr.push(objToAdd)
//     console.log(arr)
//     localStorage.setItem(arrayName, JSON.stringify(arr))
// }
//
// addToLocalStorage('one', {name:'d',age:32});

/*--------------------8------------------*/
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

// let form4 = document.form4;
// form4.onsubmit= function (event){
//     event.preventDefault()
//
//     let rowValue = document.form4.row.value
//     let boxValue = document.form4.box.value
//     let insideValue = document.form4.inside.value
//     let button = document.getElementById('tableBT')
//     let table = document.getElementById('table')
//
//     table.innerText='';
//
//     for (let i = 0; i < rowValue; i++) {
//         let tr = document.createElement('tr')
//         for (let j = 0; j < boxValue; j++) {
//             let td = document.createElement('td')
//             td.innerText=`${insideValue}`
//             tr.append(td)
//         }
//         table.append(tr)
//     }
// }

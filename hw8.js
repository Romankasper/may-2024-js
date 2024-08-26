/*--------------------1------------------*/
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.

// function ObjectCopy (object){
//     let func = [];
//     for (let objectKey in object) {
//         if (typeof object[objectKey] === "function") {
//             let p = object[objectKey].bind()
//             func.push({p,objectKey})
//         }
//     }
//     let clonePart =JSON.parse( JSON.stringify(object)) ;
//     for (const fEl of func) {
//         clonePart[fEl.objectKey]=fEl.p
//     }
//     console.log(clonePart)
//     return clonePart
//
// }
//
// let user = {
//     name:'anna',
//     age: 22,
//     greeting (){
//
//     }
// };
//
// ObjectCopy(user);

/*--------------------2------------------*/
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції


// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
//     ];
//
// console.log( coursesAndDurationArray.map((value,index) => value={id:index+1,title:value.title,monthDuration: value.monthDuration}))

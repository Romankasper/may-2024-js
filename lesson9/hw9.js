/*--------------------1------------------*/
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let div =  document.createElement('div');
// div.classList.add('wrap', 'collapse', 'alpha','beta');
// div.style.backgroundColor = 'red'
// div.style.color = 'green'
// div.style.fontSize = 'large';
// document.body.append(div);
// let clone = div.cloneNode(true);
// document.body.append(clone);

/*--------------------2------------------*/
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

// let array = ['Main','Products','About us','Contacts'];
//
// let ul = document.createElement('ul')
//
// for (const item of array) {
//     let li = document.createElement("li")
//     li.innerText=`${item}`
//     ul.append(li)
// }
// document.body.append(ul);

/*--------------------3------------------*/
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// for (let item of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     for (let itemKey in item) {
//         let p=document.createElement("p")
//         p.append(item[itemKey]);
//         div.append(p)
//     }
//     document.body.append(div)
// }

/*--------------------4------------------*/
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const item of coursesAndDurationArray) {
//     let div = document.createElement("div");
//     div.classList.add('item');
//
//     let h1 = document.createElement("h1");
//     h1.classList.add('heading');
//     h1.innerText=`${item.title}`
//
//     let p = document.createElement("p");
//     p.classList.add('description');
//     p.innerText=`${item.monthDuration}`
//     div.append(h1,p)
//     document.body.append(div)
// }

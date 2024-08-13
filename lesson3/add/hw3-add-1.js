/*--------------------1------------------*/

// let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1);
// let arr2 = ['one','two','three','four','five'];
// console.log(arr2);
// let arr3 = ['one', 2, 3, true, false];
// console.log(arr3)

/*--------------------2------------------*/

// let arr = [];
// arr[0] = 2;
// arr[1]='word';
// arr[2]=true;
// console.log(arr);

/*--------------------3------------------*/

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// let i=0;
// while(i<arr.length){
//     console.log(arr[i]);
//     i++;
// }

// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }

// let i=0;
// while(i<arr.length){
//    if(i % 2 !==0){
//        console.log(arr[i])
//    }
//    i++;
// }

// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 !== 0) {
//         console.log(arr[i])
//     }
// }

// let i=0;
// while(i<arr.length){
//    if(arr[i] % 2 === 0){
//        console.log(arr[i])
//    }
//    i++;
// }

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i])
//     }
// }

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]%3 === 0){
//         arr[i]="okten";
//     }
// }
// console.log(arr)

//let i=arr.length;
// while(i>=0){
//     console.log(arr[i]);
//     i--;
// }



// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

/*--------------------4------------------*/

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let number of arr1) {
//     console.log(number);
// }

/*--------------------5------------------*/

// let arr = ['one','two','three','four','five','six','seven', 'eight', 'nine', 'ten'];
// for (let string of arr2) {
//     console.log(string);
// }

/*--------------------6------------------*/

// let arr = [true, false, true, false, true, false, true, false, true, false];
// for (let boolean of arr) {
//     console.log(boolean);
// }

/*--------------------7------------------*/

// let arr = ['one','two',3,false,5,'six',true, 8, 'nine', true];
//
// for (let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === "boolean"){
//         console.log(arr[i])
//     }
//
// }

/*--------------------8------------------*/

// let arr = ['one','two',3,false,5,'six',true, 8, 'nine', true];
//
// for (let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === "number"){
//         console.log(arr[i])
//     }
//
// }

/*--------------------9------------------*/

// let arr = ['one','two',3,false,5,'six',true, 8, 'nine', true];
//
// for (let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === "string"){
//         console.log(arr[i])
//     }
//
// }

/*--------------------10------------------*/

// let arr = [];
//
// arr[0]=1;
// arr[1]=true;
// arr[2]='aaa';
// arr[3]=false;
// arr[4]='eee';
// arr[5]=32;
// arr[6]=94;
// arr[7]='ddd';
// arr[8]=true;
// arr[9]='mmm'
// arr[10]=4;
//
// for (let arrElement of arr) {
//     console.log(arrElement);
// }

/*--------------------11------------------*/

// for (let i = 1; i <11; i++) {
//     console.log(i);
//     document.write(i + ' ')
// }

/*--------------------12------------------*/

// for (let i = 1; i <101; i++) {
//     console.log(i);
//     document.write(i + ' ')
//
// }

/*--------------------13------------------*/

// for (let i = 1; i < 101; i+=2) {
//     console.log(i);
//     document.write(i + ' ')
// }

/*--------------------14------------------*/

// for (let i = 1; i < 101; i++) {
//     if(i%2 === 0) {
//         console.log(i);
//         document.write(i + ' ')
//     }
// }

/*--------------------15------------------*/

// for (let i = 1; i < 101; i++) {
//     if(i%2 !== 0) {
//         console.log(i);
//         document.write(i + ' ')
//     }
// }

/*--------------------16------------------*/

// let books = [
//     {
//         title: 'Вбивство у Східному експресі',
//         pages: 256,
//         authors: ['Агата Крісті'],
//         genres: ['Детектив']
//     },
//     {
//         title: '1984',
//         pages: 328,
//         authors: ['Джордж Орвелл'],
//         genres: ['Наукова фантастика', 'Дистопія', 'Соціальна фантастика']
//     },
//     {
//         title: 'Гаррі Поттер і філософський камінь',
//         pages: 223,
//         authors: ['Дж. К. Роулінг'],
//         genres: ['Фентезі', 'Пригоди']
//     },
//     {
//         title: 'Сплячі красуні',
//         pages: 432,
//         authors: ['Стівен Кінг', 'Оун Кінг'],
//         genres: ['Горор', 'Містика']
//     }
// ]

// let bbname = '';
// let biggestbook = 0;
// for (let i = 0; i < books.length; i++) {
//     if(books[i].pages>biggestbook){
//         biggestbook=books[i].pages;
//         bbname=books[i].title;
//     }
// }
// console.log('The biggest book is ' + bbname + ' with ' + biggestbook + ' pages');

// let gname = '';
// let genre = 0;
// for (let i = 0; i < books.length; i++) {
//     if(books[i].genres.length>genre){
//         genre=books[i].genres.length;
//         gname=books[i].title
//     }
// }
// console.log('The book with the largest number of genres is ' + gname + ' with ' + genre + ' authors');

// let tname = '';
// let longesttitle = 0;
// for (let i = 0; i < books.length; i++) {
//     if(books[i].title.length>longesttitle){
//         longesttitle=books[i].title.length;
//         tname=books[i].title
//     }
// }
// console.log('The book with the longest title is ' + tname);


// let name = '';
// let twoAuthors = 0;
// for (let i = 0; i < books.length; i++) {
//     if(books[i].authors.length === 2){
//       console.log(books[i]);
//     }
// }

// let name = '';
// let twoAuthors = 0;
// for (let i = 0; i < books.length; i++) {
//     if(books[i].authors.length === 1){
//         console.log(books[i]);
//     }
// }




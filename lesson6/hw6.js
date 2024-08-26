/*--------------------1------------------*/
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a='hello world';
// let b='lorem ipsum';
// let c ='javascript is cool';
// console.log(a.length);
// console.log(b.length);
// console.log(c.length);

/*--------------------2------------------*/
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a='hello world';
// let b='lorem ipsum';
// let c ='javascript is cool';
// console.log(a.toUpperCase());
// console.log(b.toUpperCase());
// console.log(c.toUpperCase());

/*--------------------3------------------*/
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let a='HELLO WORLD';
// let b='LOREM IPSUM';
// let c ='JAVASCRIPT IS COOL';
// console.log(a.toLowerCase());
// console.log(b.toLowerCase());
// console.log(c.toLowerCase());

/*--------------------4------------------*/
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str.trim());

/*--------------------5------------------*/
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// function stringToarray (str) {
//     return str.split(' ')
// }
// console.log(stringToarray(str))

/*--------------------6------------------*/
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0]  за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// let a =  [10,8,-7,55,987,-1011,0,1050,0];
// let b = a.map(value => value+'' );
// console.log(b)

/*--------------------7------------------*/
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
// function sortNums (array,direction) {
// if (direction === 'ascending'){
//     return array.sort((a, b) => a-b)
// }
// if (direction === 'descending'){
//     return array.sort((a, b) => b-a);
// }
// }
// console.log(sortNums(nums, 'descending'))

/*--------------------8------------------*/
// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration-a.monthDuration));

// console.log(coursesAndDurationArray.filter(course => course.monthDuration > 5 ));

//  let a =  coursesAndDurationArray.map( (course, index) => {
//     return {
//         id: index + 1,
//         title: course.title,
//         monthDuration: course.monthDuration
//     }
// } )
// console.log(a)



/*--------------------9------------------*/
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше


let suits = ['heart', 'spade', 'diamond', 'club'];
let value = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

let cards = [];

for (let string of suits) {
    for (let string1 of value) {
        let card = {CardSuit: string, value: string1,};
        if (string === 'heart' || string === 'diamond'){
            card.color = 'red';
        }else{
            card.color = 'black';
        }
        cards.push(card)
    }
}

console.log(cards);

console.log(cards.find(card => card.CardSuit === 'spade' && card.value === 'ace'));

console.log(cards.filter(card => card.value === '6'));

console.log(cards.filter(card => card.color === 'red'));

console.log(cards.filter(card => card.CardSuit === 'diamond'));

console.log(cards.filter(card => card.CardSuit === 'club' && card.value !== '6' && card.value !== '7' && card.value !== '8'));

/*--------------------10------------------*/
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// console.log(cards.reduce((accumulator, arrSuit) => {
//     switch (arrSuit.CardSuit) {
//         case 'spade': {
//             accumulator.spades.push(arrSuit)
//             break
//         }
//         case  'diamond': {
//             accumulator.diamonds.push(arrSuit)
//             break
//         }
//         case  'heart': {
//             accumulator.hearts.push(arrSuit)
//             break
//         }
//         case  'club': {
//             accumulator.clubs.push(arrSuit)
//             break
//         }
//     }
//     return accumulator
// }, {
//     spades: [],
//     diamonds: [],
//     hearts: [],
//     clubs: []
// }));

/*--------------------11------------------*/
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// console.log(coursesArray.filter(value => {
//         return value.modules.includes('sass')}
// ));
//
// console.log(coursesArray.filter(value => {
//         return value.modules.includes('docker')}
// ));

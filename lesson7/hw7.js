/*--------------------1------------------*/
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let arr = [
//     new User(27, 'a', 'k', 'a@gmail.com', 903543),
//     new User(534, 'b', 'l', 'b@gmail.com', 9043543),
//     new User(5, 'c', 'm', 'c@gmail.com', 858234),
//     new User(24, 'd', 'n', 'd@gmail.com', 468564532),
//     new User(93, 'e', 'o', 'e@gmail.com', 4647),
//     new User(268, 'f', 'p', 'f@gmail.com', 8764),
//     new User(18, 'g', 'o', 'g@gmail.com', 46453),
//     new User(70, 'h', 'w', 'h@gmail.com', 25273),
//     new User(35, 'i', 'q', 'i@gmail.com', 45789),
//     new User(162, 'j', 'z', 'j@gmail.com', 3456)
// ];
//
// console.log(arr)

/*--------------------2------------------*/
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// console.log(arr.filter(value => value.id % 2 === 0));

/*--------------------3------------------*/
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// console.log(arr.sort((a, b) => a.id-b.id));


/*--------------------4------------------*/
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client extends User{
//
//     constructor(id, name, surname, email, phone, order) {
//         super(id, name, surname, email, phone);
//         this.order = order;
//     };
// }
//
// let clients=[
//     new Client(27, 'a', 'k', 'a@gmail.com', 903543, ['book', 'phone']),
//     new Client(24, 'b', 'l', 'b@gmail.com', 25246, ['book', 'phone', 'pen ']),
//     new Client(357, 'c', 'm', 'c@gmail.com', 63467326, ['book', 'phone','candy']),
//     new Client(84, 'd', 'n', 'd@gmail.com', 46353, ['book', 'phone','headphones']),
//     new Client(156, 'e', 'o', 'e@gmail.com', 346747, ['book', 'phone']),
//     new Client(35, 'f', 'p', 'f@gmail.com', 2525, ['book', 'phone','carrot']),
//     new Client(33, 'j', 'q', 'g@gmail.com', 45374546, ['book', 'phone','pen', 'apple']),
//     new Client(466, 'h', 'w', 'h@gmail.com', 63356, ['phone']),
//     new Client(312, 'i', 'z', 'i@gmail.com', 45245, ['book', 'phone','carrot']),
//     new Client(36, 'j', 'x', 'j@gmail.com', 235235, ['book', 'phone'])
// ];

/*--------------------5------------------*/
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// console.log(clients.sort((a, b) => a.order.length - b.order.length));

/*--------------------6------------------*/
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// function Cars (model, manufacturer, yearOfManufacture, maximumSpeed, engineCapacity){
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.yearOfManufacture = yearOfManufacture;
//     this.maximumSpeed = maximumSpeed;
//     this.engineCapacity = engineCapacity;
//     this.drive = function (){
//         console.log((`їдемо зі швидкістю ${maximumSpeed} на годину`));
//     }
//     this.info = function (){
//         for (let modelKey in this) {
//             if ( typeof this[modelKey] !== "function"){
//                console.log(`${modelKey} - ${this[modelKey]}`)
//             }
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed){
//         this.maximumSpeed = this.maximumSpeed + newSpeed;
//         console.log((this.maximumSpeed));
//     }
//     this.changeYear = function (newValue){
//         this.yearOfManufacture = newValue;
//         console.log((this.yearOfManufacture));
//     }
//     this.addDriver = function (driver){
//         this.driver= driver;
//         console.log((this.driver));
//     }
// }
//
// let a = new Cars('aaa','vvv',2012,200,853)
//     console.log(a)
// a.drive();
// a.info();
// a.increaseMaxSpeed(12);
// a.changeYear(1122);
// a.addDriver('sss');

/*--------------------7------------------*/
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Cars {
//
//     constructor(model, manufacturer, yearOfManufacture, maximumSpeed, engineCapacity) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.yearOfManufacture = yearOfManufacture;
//         this.maximumSpeed = maximumSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//     drive (){
//         console.log((`їдемо зі швидкістю ${this.maximumSpeed} на годину`));
//     }
//     info (){
//         for (let modelKey in this) {
//             if (typeof this[modelKey] !== "function"){
//                console.log(`${modelKey} - ${this[modelKey]}`)
//             }
//         }
//     }
//     increaseMaxSpeed (newSpeed){
//         this.maximumSpeed = this.maximumSpeed + newSpeed;
//         console.log((this.maximumSpeed));
//     }
//    changeYear (newValue){
//         this.yearOfManufacture = newValue;
//         console.log((this.yearOfManufacture));
//     }
//     addDriver  (driver){
//         this.driver= driver;
//         console.log((this.driver));
//     }
// }

// let a = new Cars('ggg','eee',1323,300,447)
// console.log(a)
// a.drive();
// a.info();
// a.increaseMaxSpeed(12);
// a.changeYear(2344);
// a.addDriver('sss');

/*--------------------8------------------*/
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


// class cinderella {
//
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
//
// }
//
// let cindArr =[];
//
// let name=['anna','diana','katia','nastia','olla','nina','sofia','marichka','masha','lilia'];
//
// for (let i = 0; i < 10; i++) {
//     let a = {name: name[i], age: i+19, footSize: i + 30};
//     cindArr.push(a);
// }
// console.log(cindArr);
//
// class prince {
//
//     constructor(name, age, findShoe ) {
//         this.name = name;
//         this.age = age;
//         this.findShoe = findShoe;
//     }
//
// }
//
// let b = new prince('Adam', 25, 34);
//
// for (let cindArrElement of cindArr) {
//     if (cindArrElement.footSize === b.findShoe){
//         console.log(cindArrElement)
//     }
// }
//
// console.log(cindArr.find(value => value.footSize === b.findShoe));

/*--------------------9------------------*/
// Через Array.prototype. створити власний foreach, filter

// Array.prototype.myFilter = function (a){
//     let array =[];
//     for (let item of this) {
//         if (a(item)){
//            array.push(item);
//         }
//     }
//     return array
// }
//
// let arr=[
//     {age:12},
//     {age:25},
//     {age:18},
//     {age:72},
//     {age:45},
//     {age:15},
//     {age:8},
//     {age:37}
// ];
// let result =arr.myFilter( (x) => x.age>20 );
// console.log(result);


// Array.prototype.myForEach = function (a){
//     for (let item of this) {
//          (a(item))
//     }
// }
// let arr = [1,2,3,4,5,6,7,8];
// let result = arr.myForEach((x)=> console.log(x))

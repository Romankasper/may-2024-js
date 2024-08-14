/*--------------------1------------------*/
// let arr = [];

// let a=2;
// for (let i = 0; i < 50; i++) {
//     arr[i] = a;
//     a+=2;
// }
// console.log(arr)

// let a=1;
// for (let i = 0; i < 50; i++) {
//     arr[i] = a;
//     a+=2;
// }
// console.log(arr)

// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor(Math.random() * 10);
// }
// console.log(arr)

// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor(Math.random() * 725+8);
// }
// console.log(arr)

// for (let i = 0; i < arr.length; i+=3) {
//         console.log(arr[i])
// }

// for (let i = 0; i < arr.length; i+=3) {
//     if(arr[i]%2===0){
//         console.log(arr[i])
//     };
// };

// let arr2=[];
// for (let i = 0; i < arr.length; i+=3) {
//     if(arr[i]%2===0){
//         arr2[arr2.length]=arr[i]
//     };
// };
// console.log(arr2);

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i+1]%2 === 0){
//         console.log(arr[i])
//     };
// };

// let sum=0;
// let arr3=[100,250,50,168,120,345,188];
// for (let number of arr3) {
//     sum=sum+number;
// }
// console.log(sum)

// let arr=[];
// let arr2=[];
// for (let i = 0; i < 10; i++) {
//     arr[i] = Math.floor(Math.random() * 10);
//     arr2[arr2.length]=arr[i]*5;
// };
// console.log(arr);
// console.log(arr2);

// let arr = ['l', 22, true, 'g', 'f', false, 62, 1, 's', 9];
// let num = [];
// for (let arrElement of arr) {
//     if (typeof arrElement=== "number"  ) {
//         num[num.length] = arrElement;
//     }
// }
// console.log(num);
/*--------------------2------------------*/

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities = [];

for (let i = 0; i < usersWithId.length; i++) {
    let usersWithCityElement = usersWithId[i];
    for (let j = 0; j < citiesWithId.length; j++) {
        let citiesWithIdElement = citiesWithId[j];
        if (usersWithCityElement.id === citiesWithIdElement.user_id) {
            let usersWithCitiesPart = {
                id: usersWithCityElement.id,
                name: usersWithCityElement.name,
                age: usersWithCityElement.age,
                status: usersWithCityElement.status,
                address: {
                    user_id: citiesWithIdElement.user_id, // <===
                    country: citiesWithIdElement.country,
                    city: citiesWithIdElement.city
                }
            }
            usersWithCities[usersWithCities.length] = usersWithCitiesPart;
        }
    }
}
console.log(usersWithCities);

/*--------------------3------------------*/

// let arr=[1,2,3,4,5,6,7,8,9,10];
//
// for (let number of arr) {
//     if (number%2===0){
//         console.log(number)
//     }
// }

/*--------------------4------------------*/

// let arr=[1,2,3,4,5,6,7,8,9,10];
// let sec=[];
// for (let number of arr) {
//     sec[sec.length]=number;
// }
// console.log(sec)

/*--------------------5------------------*/

// let arr=[ 'a', 'b', 'c'];
// let word='';
// for (let i = 0; i < arr.length; i++) {
//     word=word+arr[i];
// }
// console.log(word);

/*--------------------6------------------*/

// let arr=[ 'a', 'b', 'c'];
// let word ='';
// let i=0;
// while(i<arr.length){
//     word=word+arr[i];
//     i++;
// }
// console.log(word);

/*--------------------7------------------*/

// let arr=[ 'a', 'b', 'c'];
// let word ='';
// for (let wordElement of arr) {
//     word=word+wordElement;
// }
// console.log(word)

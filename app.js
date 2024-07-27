// Question 1

// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(num => num * num);
// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]


// Question 2
// function getGrade(score) {
//     return score >= 90 ? 'A' :
//            score >= 80 ? 'B' :
//            score >= 70 ? 'C' :
//            score >= 60 ? 'D' : 'F';
// }
// const studentScore = 85;
// const grade = getGrade(studentScore);
// console.log(`The student's grade is: ${grade}`); 

// Question 3
// const car = {
//     companyName: 'Toyota',
//     model: 'Camry',
//     year: 2020
// };


// function changeCarYear(newYear) {
//     car.year = newYear;
// }
// const { model, year } = car;
// console.log(`Model: ${model}, Year: ${year}`); 
// changeCarYear(2022);
// const { model: updatedModel, year: updatedYear } = car;
// console.log(`Updated Model: ${updatedModel}, Updated Year: ${updatedYear}`);

// Question 4

// function isPrime(num) {
//     if (num <= 1) return false; // 0 and 1 are not prime numbers
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];


// const primeNumbers = numbers.filter(isPrime);

// console.log(primeNumbers);


// Question 5

// Sample array of numbers
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Use case for map: Square each number
// const squaredNumbers = numbers.map(num => num * num);
// console.log('Squared Numbers:', squaredNumbers); // Output: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// // Use case for filter: Filter out even numbers
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log('Even Numbers:', evenNumbers); // Output: [2, 4, 6, 8, 10]

// // Use case for reduce: Sum all numbers
// const sumOfNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log('Sum of Numbers:', sumOfNumbers); // Output: 55

// // Sample array of objects
// const users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 },
//     { name: 'David', age: 40 }
// ];

// // Use case for map: Extract names
// const names = users.map(user => user.name);
// console.log('Names:', names); // Output: ['Alice', 'Bob', 'Charlie', 'David']

// // Use case for filter: Users older than 30
// const usersOlderThan30 = users.filter(user => user.age > 30);
// console.log('Users older than 30:', usersOlderThan30);
// // Output: [{ name: 'Charlie', age: 35 }, { name: 'David', age: 40 }]

// // Use case for reduce: Calculate total age
// const totalAge = users.reduce((accumulator, user) => accumulator + user.age, 0);
// console.log('Total Age:', totalAge); // Output: 130

// Question 6

// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('There was a problem with the fetch operation:', error);
//     }
// }

// // Call the asynchronous function
// fetchData();


// Question 7



const person = {
    name: 'John Doe',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    },
    contact: {
        email: 'john.doe@example.com',
        phone: '555-1234'
    }
};

const phoneNumber = person.contact?.phone;

console.log(`Phone Number: ${phoneNumber}`); 


const personWithoutContact = {
    name: 'Jane Doe',
    address: {
        street: '456 Elm St',
        city: 'Othertown',
        state: 'NY',
        zip: '67890'
    }
};


const phoneNumberMissingContact = personWithoutContact.contact?.phone;

console.log(`Phone Number: ${phoneNumberMissingContact}`); 

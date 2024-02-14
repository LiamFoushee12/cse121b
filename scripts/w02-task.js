/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Liam Foushee';
let currentYear = '2024';
let profilePicture = 'images/profile.jpg';



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.getElementById('year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */
yearElement.innerHTML = currentYear;
nameElement.innerHTML = `<strong>${fullName}</strong>`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */

let favFood = ['taco', 'burrito', 'alfredo', 'pizza'];

foodElement.innerHTML = favFood;
let singleFavoriteFood = "Burgers";


favFood.push(singleFavoriteFood);
foodElement.innerHTML += `<br>${favFood}`;

favFood.shift();
foodElement.innerHTML += `<br>${favFood}`;

favFood.pop();
foodElement.innerHTML += `<br>${favFood}`;





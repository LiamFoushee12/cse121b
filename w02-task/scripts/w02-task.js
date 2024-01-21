/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Liam Foushee';
let currentYear = '2024';
let profilePicture = '/Users/liamfoushee/Desktop/Programming/cse121b/w02-task/images/IMG_1182.JPG';
var singleFavoriteFood = "Burgers";



/* Step 3 - Element Variables */
var nameElement = document.getElementById('name');
var foodElement = document.getElementById('food');
var yearElement = document.getElementById('year');
var imageElement = document.getElementById('profilePicture');



/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', 'Profile image of ' + fullName);
Element.setAttribute()




/* Step 5 - Array */

var favFood = ['taco', 'burrito', 'alfredo', 'pizza']
foodElement.innerHTML = "My favorite foods: " + favFood.join(", ");
favFood.push(singleFavoriteFood);
foodElement.innerHTML += `<br>${favFood.join(", ")}`;
favFood.shift();
foodElement.innerHTML += `<br>${favFood.join(", ")}`;
favFood.pop();
foodElement.innerHTML += `<br>${favFood.join(", ")}`;






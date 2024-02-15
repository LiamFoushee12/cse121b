/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Liam Foushee",
    photo: "images/profile.jpg",
    favoriteFoods: [
        "Pizza", 
        "Sushi", 
        "Pasta"
        ],
    hobbies: ["Gaming", "Reading", "Coding"],
    placesLived: []
}

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Portland, OR",
        length: "10 years"
    },
    {
        place: "Gilbert, Az",
        length: "4 years"
    },
    {
        place: "LaCenter, WA",
        length: "4 years"
    },
    {
        place: "Rexburg, ID",
        length: "3 years"
    }
  );

/* DOM Manipulation - Output */
document.querySelector('#name').textContent = myProfile.name;

/* Name */
//document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
/* Places Lived DataList */
var dlElement = document.querySelector("#places-lived");

myProfile.placesLived.forEach(place => {
    var dtElement = document.createElement("dt");
    dtElement.textContent = place.place;
    var ddElement = document.createElement("dd");
    ddElement.textContent = place.length;
    dlElement.appendChild(dtElement);
    dlElement.appendChild(ddElement);
});



/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = [];



/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        // Create HTML elements
        const articleElement = document.createElement('article');
        const h3Element = document.createElement('h3');
        const imgElement = document.createElement('img');

        // Add templeName to h3 element
        h3Element.textContent = temple.templeName;

        // Set src and alt attributes for img element
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;

        // Append h3 and img elements to article element
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);

        // Append article element to templesElement
        templesElement.appendChild(articleElement);
    });
};



/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
        // Fetch temple data from the provided URL
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

        // Convert response to JavaScript object and assign it to templeList
        templeList = await response.json();

        // Call the displayTemples function and pass it the list of temples
        displayTemples(templeList);
    } catch (error) {
        console.error('Error fetching temple data:', error);
    }
};

/* reset Function */
const reset = () => {
    // Get all article elements inside templesElement
    const articleElements = templesElement.querySelectorAll('article');
    
    // Remove each article element from templesElement
    articleElements.forEach(article => {
        article.remove();
    });
};

/* filterTemples Function */
const filterTemples = (temples) => {
    // Clear the displayed list of temples
    reset();

    // Get the value of the select element with ID "filtered"
    const filter = document.querySelector('#filtered').value;

    // Filter temples based on the selected option
    switch (filter) {
        case 'utah':
            // Filter for temples located in Utah
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'nonutah':
            // Filter for temples located outside of Utah
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            // Filter for temples built before 1950
            displayTemples(temples.filter(temple => new Date(temple.dedicationDate) < new Date(1950, 0, 1)));
            break;
        case 'all':
            // No filter, display all temples
            displayTemples(temples);
            break;
        default:
            console.error('Invalid filter option');
            break;
    }
};


getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });

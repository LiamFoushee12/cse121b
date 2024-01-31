/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){

    return number1 + number2;
}

function addNumbers (){
  
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
    document.querySelector('#addNumbers').addEventListener('click', addNumbers);

}

/* Function Expression - Subtract Numbers */

function subtractNumbers() {
    // Retrieve values from input fields
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    // Perform subtraction
    let result = subtractNumber1 - subtractNumber2;

    // Update the result in another input field with ID 'difference'
    document.querySelector('#difference').value = result;
}

// Add the event listener outside the function
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (a, b) => a * b;

const multiplyNumbers = () => {
    // Retrieve values from input fields
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);

    // Perform multiplication
    let result = multiply(factor1, factor2);

    // Update the result in another input field with ID 'product'
    document.querySelector('#product').value = result;
};

// Add the event listener outside the arrow function
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */

const divide = (a, b) => a / b;

const divideNumbers = () => {

    let dividend = parseFloat(document.getElementById('#dividend').value);
    let divisor = parseFloat(document.getElementById('#divisor').value);
    let result = divide(dividend, divisor);

    document.getElementById('#quotient').value = result;
};

document.getElementById('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */

function getTotal() {
    let subtotal = parseFloat(document.getElementById('subtotal').value);

    if (document.getElementById('member').checked){
        subtotal = subtotal - subtotal * 0.2;
    }

    document.getElementById('total').textContent = `$${subtotal.toFixed(2)}`;
}

document.getElementById('getTotal').addEventListener('clcik', getTotal)

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */

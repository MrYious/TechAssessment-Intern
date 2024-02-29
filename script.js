

// Function name: calculateFactorial
// Function description: This is the function for calculating the factorial of a number
// Function parameters:
//      [1] num -> integer
// Returns: result -> integer [The factorial of (num)]
// Time Complexity: O(N)
// Technique used:  

// Sample Visualization: num = 5
//      result = 1 * 2 * 3 * 4 * 5

const calculateFactorial = (num) => {
    // Factorial works where 1 x ... X N
    // So I initialized a starting value of 1 in the result variable
    let result = 1

    // I created a loop that will run from 2 -> num where on each run it will multiply the result to next number
    for (let next = 2; next <= num; next++) {
        result *= next
    }

    // I return the result back to the caller
    return result
}

// I created a function that will handle the submit event made in the interface
const handleSubmit = (event) => {
    // This prevents the program to execute the usual form submission (http get method)
    event.preventDefault()

    // I extracted the value in the interface and stored it in a variable
    const number = document.getElementById('number').value;
    const factorial = calculateFactorial(number)

    // I logged the result to console
    // It can be checked by going to dev tools console tab
    console.log("Number:", number);
    console.log("Factorial: ", factorial);
}
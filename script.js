

// Function name: calculateFactorial
// Function description: This is the function for calculating the factorial of a number
// Function parameters:
//      [1] num -> integer
// Returns: result -> integer [The factorial of (num)]
// Time Complexity: O(N)
// Technique used:
//      I used looping instead of recursion as it is more memory efficient
//      Recursion consumes a lot of memory and is considered bad practice unless necessary
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

// Function name: checkPrime
// Function description: This is the function for checking if a number is prime or not
// Function parameters:
//      [1] num -> integer
// Returns: true / false -> boolean
// Time Complexity: O(N)
// Technique used:
//      I used looping to check if there is a number that is factor of num

const checkPrime = (num) => {
    // A prime number is only divisible to 1 and itself
    // So i exempt 1 and num in the range of I need to check
    let current = 2
    let end = num - 1

    // I created a loop that will run from 2 -> num where on each run it will multiply the result to next number
    for (; current <= end; current++) {
        // Mod operator gives the remainder from the division operation of two numbers
        // if the result is 0, then it means that num is divisible by other numbers and is not a prime.
        if (num % current === 0) {
            // The first match that negates the description of prime will already return a false without completing the loop
            return false
        }
    }

    // If the loop finishes without matches to the condition then it means the num is a prime
    return true
}

// I created a function that will handle the submit event made in the interface
const handleSubmit = (event) => {
    // This prevents the program to execute the usual form submission (http get method)
    event.preventDefault()

    // I extracted the value in the interface and stored it in a variable
    const number = document.getElementById('number').value;
    const factorial = calculateFactorial(number)
    const isPrime = checkPrime(number);

    // I logged the result to console
    // It can be checked by going to dev tools console tab
    console.log("Number:", number);
    console.log("Factorial: ", factorial);
    console.log("IsPrime?: ", isPrime);

    // This is to show the result in the interface
    document.getElementById('result').style.display = 'block'
    document.getElementById("textFactorial").textContent = (`${number}! == ${factorial}`)
    document.getElementById("textPrime").textContent = (`${number} is${!isPrime ? ' NOT ' : ''} a prime number`)
}
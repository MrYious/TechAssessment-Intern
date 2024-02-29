
// I created a function that will handle the submit event made in the interface
const handleSubmit = (event) => {
    // This prevents the program to execute the usual form submission (http get method)
    event.preventDefault()

    // I extracted the value in the interface and stored it in a variable
    const number = document.getElementById('number').value;
    console.log(number);
}
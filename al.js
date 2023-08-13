function cubeNumber(input) {
    if (typeof input === 'number') {
        return input * input * input; // Cube the input number
    } else {
        return "Invalid input. Please provide a valid number."; // Handle non-number input
    }
}

// Test cases


var nonNumber = "hello";
var nonNumberResult = cubeNumber(nonNumber);
console.log(nonNumberResult);
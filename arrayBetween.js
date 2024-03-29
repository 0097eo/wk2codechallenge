// Function to create an array of numbers from 'first' to 'last'
function arrayBetween(first, last) {
    // Initialize an empty array to store the numbers
    let result = [];
    // Loop from 'first' to 'last', inclusive
    for(let i = first; i <= last; i++) {
        // Push each number into the 'result' array
        result.push(i);
    }
    // Return the 'result' array
    return result;
}

// Example usage: 
console.log(arrayBetween(-3, 9));

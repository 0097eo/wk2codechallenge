// Function to swap the case of each character in a string
function changeTheCase(str) {
    // Split the string into an array of characters
    // Map over each character to check its case and swap it 
    return str.split('').map(char => 
        // Check if the character is lowercase
        char === char.toLowerCase() ? 
        // If true, convert it to uppercase
        char.toUpperCase() : 
        // If false, convert it to lowercase
        char.toLowerCase()
    // Join the array back into a string
    ).join('');
}

// Example usage
console.log(changeTheCase('The Sum Of The Five Numbers Is Twenty'));

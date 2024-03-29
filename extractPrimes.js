// This function extracts prime numbers from an array and returns them 
function extractPrimes(array) {
    // The filter method is used to create a new array with all elements that pass the test 
    return array.filter(num => {
        // If the number is less than 2, it's not prime.
        if (num < 2) return false;
        // Loop from 2 to the square root of the number to check for divisibility.
        for (let i = 2; i <= Math.sqrt(num); i++) {
            // If the number is divisible by any number in this range, it's not prime.
            if (num % i === 0) return false;
        }
        // If the number is not divisible by any number in the range, it's prime.
        return true;
    });
}

// Example usage
console.log(extractPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 

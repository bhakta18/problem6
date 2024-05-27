function isPrime(number) {
    // Check if the number is less than 2
    if (number < 2) {
        return false;
    }
    
    // Check for prime numbers
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    
    return true;
}

// Example usage
console.log(isPrime(11)); 
console.log(isPrime(16)); 

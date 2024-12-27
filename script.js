function isFibonacci(num) {
    // Function to check if a number is a perfect square
    function isPerfectSquare(n) {
        const sqrt = Math.sqrt(n);
        return sqrt === Math.floor(sqrt);
    }

    // Check if the number satisfies Fibonacci conditions
    if (isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4)) {
        return true;
    }
    return false;
}

// Taking input via prompt
const input = parseInt(prompt("Enter a non-negative integer:"), 10);

// Validating input and showing the result
if (!isNaN(input) && input >= 0) {
    alert(isFibonacci(input));
} else {
    alert("Please enter a valid non-negative integer.");
}

// A simple function to calculate the sum of numbers in an array
function calculateSum(numbers) {
console.log("Input array: ", numbers); // Step 1: Logging input
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
// Debugging the loop logic
console.log(`Current number: ${numbers[i]}, Current
sum: ${sum}`);
// Adding the current number to the sum
sum += numbers[i];
}
console.log("Final sum: ", sum); // Step 3: Logging the final result
return sum;
}
// Example array to calculate the sum
const numbersArray = [10, 20, 30, 40, 50];
// Call the function and display the result
const totalSum = calculateSum(numbersArray);
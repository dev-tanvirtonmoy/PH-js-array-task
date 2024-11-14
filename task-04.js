// Task Brief
// Checking if it's an Array
    // Create different variables, each containing either an array or a non-array value.
    // Now use isArray to check if each variable is an array.
    // Print a message to the console indicating whether each variable is an array or not.

const books = [
    "Python for Beginners",
    "JavaScript: The Good Parts",
    "Learning HTML & CSS",
    "Data Structures in C++"
];

const age = 22;

const hobbies = [
    "reading", 
    "swimming", 
    "hiking"
];

const greeting = "Hello Brother";

console.log(Array.isArray(books));
console.log(Array.isArray(age));
console.log(Array.isArray(hobbies));
console.log(Array.isArray(greeting));
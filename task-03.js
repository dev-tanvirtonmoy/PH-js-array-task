// Task Brief
// Checking Array Membership with ‘includes’
    // Create an array of books containing different book.
    // Use the includes method to check if the array contains a javascript book.
    // Print a message to the console indicating whether the element is present in the array or not.

const books = [
    "Don't make me think",
    "The Design of Everyday things",
    "Hooked",
    "JavaScript: The Good Parts"
];
const findTheBook = "JavaScript: The Good Parts";

if(books.includes(findTheBook)){
    console.log("Yes, the book is in the array.")
} else {
    console.log("No, the book is not in the array.")
};
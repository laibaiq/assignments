//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function Make_great(magicians: string[]): string[] {
    // Map each magician's name to include "the Great" and return the modified array
    return magicians.map(magician => `the Great ${magician}`);
}

// Function to show magicians
function SHow_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
const originalMagicians: string[] = ['Merlin', 'Harry Houdini', 'David Copperfield', 'Gandalf'];

// Create a copy of the original array
const copyOfMagicians: string[] = [...originalMagicians];

// Call the function to make magicians great and store the result in a new array
const GreatMagicians: string[] = Make_great(copyOfMagicians);

// Call the function to show the original magicians
console.log("Original Magicians:");
SHow_magicians(originalMagicians);

// Call the function to show the great magicians
console.log("\nGreat Magicians:");
SHow_magicians(GreatMagicians);
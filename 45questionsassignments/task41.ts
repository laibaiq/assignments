//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// Function to show magicians
function Show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
const magicianNames: string[] = ['Merlin', 'Harry Houdini', 'David Copperfield', 'Gandalf'];

// Call the function to show magicians
show_magicians(magicianNames);
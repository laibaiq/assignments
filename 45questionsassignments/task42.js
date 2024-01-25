"use strict";
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// Function to make magicians great
function make_great(magicians) {
    // Map each magician's name to include "the Great" and return the modified array
    return magicians.map(magician => `the Great ${magician}`);
}
// Function to show magicians
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Array of magician's names
const MagicianNames = ['Merlin', 'Harry Houdini', 'David Copperfield', 'Gandalf'];
// Call the function to make magicians great
const greatMagicians = make_great(MagicianNames);
// Call the function to show great magicians
show_magicians(greatMagicians);

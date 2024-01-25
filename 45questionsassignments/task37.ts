//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

// Modified make_shirt function with default values
function Make_shirt(size: string = 'large', message: string = 'I love TypeScript'): void {
    // Print a sentence summarizing the size and message on the shirt
    console.log(`The shirt is size ${size.toUpperCase()} and has the message: "${message}"`);
}

// Create a large shirt with the default message
Make_shirt();

// Create a medium shirt with the default message
Make_shirt('medium');

// Create a shirt of any size with a different message
Make_shirt('small', 'TypeScript is awesome!'); 
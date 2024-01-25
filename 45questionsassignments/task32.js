"use strict";
/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
// Make a list of current users
let currentUsers = ['John', 'Alice', 'Bob', 'Eve', 'Charlie'];
// Make another list of new users
let newUsers = ['Alice', 'Dave', 'Charlie', 'Mallory', 'Frank'];
// Loop through new users to check for uniqueness
for (let newUser of newUsers) {
    // Check if the username already exists (case insensitive)
    let usernameExists = currentUsers.some(user => user.toLowerCase() === newUser.toLowerCase());
    if (usernameExists) {
        console.log(`The username '${newUser}' is not available. Please enter a new username.`);
    }
    else {
        console.log(`The username '${newUser}' is available.`);
    }
}

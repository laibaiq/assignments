"use strict";
//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// Function to store information about a car
function create_car(manufacturer, model, ...extras) {
    const carInfo = {
        manufacturer,
        model,
    };
    // Process additional name-value pairs (extras)
    for (const [key, value] of extras) {
        carInfo[key] = value;
    }
    return carInfo;
}
// Call the function with required information and optional features
const car1 = create_car('Toyota', 'Camry', ['color', 'blue'], ['year', 2022]);
const car2 = create_car('Tesla', 'Model 3', ['color', 'red'], ['autopilot', true]);
// Print the returned Objects
console.log(car1);
console.log(car2);

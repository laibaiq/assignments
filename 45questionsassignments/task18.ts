/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
///////////////////////////////////*/
let traveldestination :string[] = [ "london" ,"paris", "makkah","madina","seoul"]

console.log("original order:")
console.log(traveldestination)

console.log("\n Alphabetical order of list without modification")
console.log([...traveldestination].sort())
console.log("sowing array in original order")
console.log(traveldestination)

console.log("\n Reverse alphabetical order")
console.log([...traveldestination].sort().reverse())

console.log("sowing array in original order")
console.log(traveldestination)

console.log("\n reverse order")
traveldestination.reverse()
console.log(traveldestination)

console.log("\n back to original")
traveldestination.reverse()
console.log(traveldestination)

console.log("\n change to alphabetical")
traveldestination.sort()
console.log(traveldestination)

console.log("\n change to reverse alphabetical order")
traveldestination.sort().reverse()
console.log(traveldestination)


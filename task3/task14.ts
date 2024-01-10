//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestlist:Array<string>=[
    "Sania jabeen",
    "Sehrish",
    "Komal",
    "Aleeya khan",
    "Zoya malik",
    "Hania amir",
];
guestlist.forEach((guestname)=>
{
  console.log(`Dear ${guestname},you are invited to our dinner party we will be very thankful if you would join us.`) 
})
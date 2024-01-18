//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.

let Guestlist:Array<string>=[
    "Sania jabeen",
    "Sehrish",
    "Komal",
    "Aleeya khan",
    "Zoya malik",
    "Hania amir",
];

let guestnotcoming ="Komal"
console.log(`${guestnotcoming} is not able to attend dinner`)

let Newguest = "zebreen asad"
let indexofguestnotcoming:number = Guestlist.indexOf(guestnotcoming)
// console.log(guestnotcoming)
if(indexofguestnotcoming !== -1){
    Guestlist[indexofguestnotcoming] = Newguest
}
//console.log(Guestlist[2])

console.log("second set of invitation message:")
Guestlist.forEach((guest:string)=>{
console.log(`Dear ${guest}, you are invited to dinner hope you can join us`)
})
export{Guestlist}
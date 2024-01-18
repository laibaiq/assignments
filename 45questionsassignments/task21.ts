//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


const bookbundle =
{
    name:"harry potter",
    price:1000,
    description:"complete book series"
}

let bookbundles:Array<typeof bookbundle>=[];
 bookbundles.push(bookbundle);
 bookbundles.push
 ({
   name:"twilight",
   price:700,
   description:"complete book series"
})

let bookbundle3={
    name:"lord of the rings",
    price:1500,
    description:"complete book series"
}

bookbundles.push(bookbundle3)
//console.log(bookbundles);

bookbundles.push({name:"percy jackson",price:800,description:"books available"});
//console.log(bookbundles)

function displaybookbundles(bookbundles:Array<typeof bookbundle>)
{
    for(let i of bookbundles)
    {
        console.log(`
        title:${i.name}
       description:${i.description}
       price:${i.price} 
       ------------\n`);
    }
}
displaybookbundles(bookbundles)
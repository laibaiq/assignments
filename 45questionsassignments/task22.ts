//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.


function fruit( name:string,color:string,taste:string){
    return{
name,
color,
taste,
    };
}

const FRUITS=[
fruit("apple","red","sweet"),
fruit("kiwi","green","tart"),
fruit("tangerine","orange","citrusy"),

];
const invalidindex = 10;
console.log(`Fruits at index ${invalidindex}:`,FRUITS[invalidindex]);

FRUITS.forEach((FRUITS)=>{
    console.log(` name:${FRUITS.name}, color:${FRUITS.color}, taste:${FRUITS.taste}`)
});

export{};
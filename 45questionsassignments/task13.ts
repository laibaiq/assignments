////Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”


let favouritetransport:Array<[transport:string, brand:string]>=[]

favouritetransport.push(["car","bugatti"])
favouritetransport.push(["motorbike","honda"])
//console.log(favouritetransport)

favouritetransport.forEach(([transport,brand])=>
{console.log(`i would like to own a ${brand} ${transport}`)}
)

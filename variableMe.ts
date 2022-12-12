//strings
let greetings: string = "hello world"

// greetings = 45;      uncomment and see the error!!!
// greetings = true;
// greetings = "Good Morning";

greetings.toLocaleLowerCase()
console.log(greetings)

//number
let rollNo: number = 21;     // can be avoided 

let userId = 300.003;        //Good practice

// Inference => Typescript is smart enough to get what variable type is just by assigning value to it rather than writting its type. This is nothing but Inferance.

userId.toFixed()


//any
let stationary;        //by default type is 'any'
function pencil(){
    return true       
}
stationary = pencil(); //not a good practice writing fun like this


let hero:string;
function getHero(){
    return "thor"
}
hero = getHero()


export { }

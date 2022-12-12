function add(num:number){
    return "hello"     //must give an error
}
add(5)    

function sum(num):number{
    //return "hello"           //now throwing error
    return num+2
}
sum(5)

let login = (password:string):void=>{}     //study the difference
let logOut = (password:string):any=>{}
let signIn = (password:string):string=>{
    return "sucessful"
}


let heros = ["thor" , "black widow", "spiderman"]

let myhero = heros.map((hero):string =>{
    return `my hero is ${hero}`
   // return 123  //uncomment and see the magic
})


function consoleError(errmsg:string):void{    //void- not going to return anything
    console.log(errmsg)
}


function handleError(errmsg:string): never{ //never- never returns anything
    throw new Error(errmsg)
}

export{}
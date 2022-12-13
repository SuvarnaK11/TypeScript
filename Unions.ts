let id: number | string;
id = 11;
id = "radha";


type User = {
    name: string,
    email: string
}

type admin = {
    username: string,
    id: number
}

let radha: User | admin;
radha = { name: "", email : "" } 
radha = { username: "", id : 11 } 

function game(level:number | string){
    console.log(`my level is ${level}`)
    
}
game(5)
game("tough");


function Game(level:number | string){
    // level.toLowerCase()
    if(level === "string"){
        level.toLowerCase();
    }

    if(level === "number"){
        level + 2
    }
}


let arr8: (string | number | boolean)[] = [1,3, "3", true]


export{}
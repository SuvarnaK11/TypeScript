type User = {
    name : string,
    email : string,
    isActive : boolean,
    readonly id : number,      //can't change readonly once assigned a value
    creditCard? : number       //its optional- you can assigned value and not also. 
}

let Myuser : User ={
    name: "r",
    email :"r@r.com",
    isActive: true,
    id : 11,
    creditCard : 12345
}

//Myuser.id = 22;     //uncomment to see magic
Myuser.name = "R";

let newUser : User ={
    name: "r",
    email :"r@r.com",
    isActive: true,
    id : 11,
    //creditCard : 12345    //perfectly fine without creditCard
}


export{}
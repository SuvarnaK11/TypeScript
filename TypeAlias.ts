type User ={
     name : string,
     email : string,
     price: number,
     isPaid : boolean 
}

function createUser(newUser : User):User {
    return {name : "", email:"", price:99, isPaid: false}
}

//createUser({})
createUser({name : "abc", email:"a@a.com", price:199, isPaid: true})


type myString = string;
let Myname : myString = "radha";

export{}
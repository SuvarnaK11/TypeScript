let anyObject = {
    name : "radha",
    email: "r@r.com",
}

function createUser({name:string, isPaid: boolean}){}
createUser({name:"radha", isPaid:true})

function MyCourse():{}{
    return {}                  //magic- function should return an object
}

function newCourse():{name:string, price:number}{
    return {name:"angular14", price:399}
}

//createUser({name:"sonu", isPaid:false, email:"s@s.com"})     //error
let newUser = {name:"sonu", isPaid:false, email:"s@s.com"}

createUser(newUser)      //perfect


export{}
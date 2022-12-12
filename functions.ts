function sum(num){
    return num+2
}
sum(5)  //all good
sum("5") //not good

function add(num:number){
    return num+2
}
//add("5") //giving error i.e. not acceptable


function getUpper(val){
    return val.toUpperCase()
}
getUpper(543)  // error is expected

function getUpperCase(val:string){
    return val.toUpperCase()
}
//getUpperCase(546)   //throwing an error
getUpperCase("radha")

function signUp(name:string, email:string, isPaid:boolean){
    
}
//signUp(1,2,3)
signUp("radha","r@r.com",true)


//Arrow functions

let loginUser = (name:string, email:string, isPaid:boolean)=>{}
//loginUser("radha", "r@r.com") //error  ..if I WANT TO PASS ONLY TWO VALUES


let loggedinUser = (name:string, email:string, isPaid:boolean=false)=>{}
loggedinUser("radha", "r@r.com") 
//perfect... by default value is given to 3rd param


export {}
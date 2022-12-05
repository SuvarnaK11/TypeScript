function sum(num:number):number{
    return num+2
    // return "radha"
}
sum(5)
sum(3)

function getCamel(val:string){
   return val.toUpperCase()
}

function signUpuser(name:string, email:string, ID:number){}
signUpuser("radha","r@r.com",11)


function multiply(num:number):number{
    return num*10
}
// return "sum"
multiply(30)


let func = (s:string) : string =>{
    return "radha"
}


const heros = ["thor", "black widow"]
heros.map((hero):string=>{
    return "heros is ${hero}"
})

function errorMsg(errmsg:string):void{
    console.log("502")
}

function showError(err:number):void{
     throw new Error("502");
    
}

export{}
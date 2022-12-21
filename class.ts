class User {
    name:string
    email:string
    id: number
    city : string 
    readonly state : string = "MH"
    constructor(name: string, email: string, id:number){
        this.name = name;
        this.email = email;
        this.id= id
    }
}

let newUser = new User ("radha","r@r.com",11)
newUser.city = "nashik"
// newUser.state = "KN"

export{}
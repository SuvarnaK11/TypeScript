interface User {
    name : string,
    email : string,
    readonly id : number,
    isActive : boolean,
    paidAmount? : number
    getDiscount() : number | string,
    getCoupon : () => boolean,
    useCoupon(couponName : string, off : number) : string
}

let user1 : User = {
    name : "r",
    email : "r@r.com",
    id :11,
    isActive : false,
    paidAmount : 199,
    getDiscount() {
        return "20%"
    },
    getCoupon() {
        return true
    },
    useCoupon(name: "radha10", off: 10) {
        return "successful"
    },
    role : "admin"
}

// REOPENING OF INTERFACE

interface User {
    role : string
}

// EXTENDING INTERFACE

interface newUser extends User{
    experience : number
}

let person1 : newUser = {
    experience : 2,
    name : "r",
    email : "r@r.com",
    id :11,
    isActive : false,
    paidAmount : 199,
    getDiscount() {
        return "20%"
    },
    getCoupon() {
        return true
    },
    useCoupon(name: "radha10", off: 10) {
        return "successful"
    },
    role : "admin"
}


export{}
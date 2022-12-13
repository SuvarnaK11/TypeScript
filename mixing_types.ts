type cardNumber = {
    cardnumber : number
}

type cardDate = {
    carddate : number
}

type AllcardDetails = cardNumber & cardDate & {
        cvv :number
}

let firstCard : AllcardDetails ={
    cvv : 743,
    carddate : 23498,
    cardnumber: 889903
}

export{}
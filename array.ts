let arr1 : [] = []      //this is an empty array
//arr1.push("hi")

let arr2 : string[] = []
arr2.push("item1")

let arr3 : number[] = []
arr3.push(5)

let arr4 : Array<number> =[]
let arr5 : Array<string> =[]

let arr6 : number[][] =[
    [244, 566, 89],
    [123],
    [2145]
]

type User = {
    title : string,
    html : any
}

let newUser :User[] = []
newUser.push({title: "" , html:""})

let arr7 : any[] = [{}]
arr7.push({title:""})
arr7.push({html:""})




export{}
    
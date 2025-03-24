// alert("Javascript is running")

// Variables

// const age = 25

// age = 30
// console.log(typeof(age))

// age="Mustafa"
// console.log(typeof(age))

// Strings

// let firstname = "Aadit"
// let lastname = "Backend king"

// console.log(firstname+lastname)

// console.log(firstname[0])

// console.log(firstname.toUpperCase())
// console.log(firstname.length)

// console.log(lastname.slice(2,9))

// let message = `Firstname is ${firstname}. Lastname is ${lastname}` // template string

// Arrays

// let players = ["Rohit","Virat","Shubman","Shreyas"]
// console.log(players.length)
// console.log(players)
// let updatedPlayers = players.concat("Rishabh","Hardik","Surya")
// console.log(updatedPlayers)

// console.log(players.indexOf("Virat"))

// console.log(players.join("-"))

// console.log(players.push("Aadit"))
// console.log(players.push("Vatsal"))
// console.log(players.push("Thala"))
// console.log(players.pop("Thala"))

// console.log(players)

// Type Conversions

// let score = '100'

// score = Number(score)

// console.log(typeof(score))

// let result = "hello"

// result = Number(result)

// console.log(result)
// console.log(typeof(result))

// let b = Boolean(100)
// console.log(b)

// Functions

// greet("Aadit king")

// function greet(x)
// {
//     console.log("Hello",x)
// }

// greet("Aadit the king")

// Function Expression

// greet("Aadit the King") // Will give and error

// const greet = function(x)
// {
//     console.log("Hello",x)
// }

// greet("Aadit the King")

// Default values

// const greet = function(x='a',y='b')
// {
//     console.log(`Hello ${x} and ${y}`)
// }

// greet('ltt','ftt')

// Return values

// const areaFunc = function(radius)
// {
//     return 3.14*radius*radius
// }

// console.log(areaFunc(5))

// Arrow Functions

// const areaFunc = (radius)=>{
//     return 3.14*radius*radius
// }

// console.log(areaFunc(5))

// Bill Calculate Function

// const calculateBill = (productPrice , tax)=>
// {
//     var totalValue = 0
//     var totalBill = 0
//     tax = totalValue/100

//     for(i = 0 ; i<productPrice.length ; i++)
//     {
//         totalValue = productPrice[i] + productPrice[i]*tax
//         totalBill = totalBill + totalValue
//     }

//     return totalBill
// }

// console.log(calculateBill([10,20,30,40,50],10))

// callback fxn

// const myFunct = (callbackFxn)=>{
//     let value = 50
//     callbackFxn(value)
// }

// const callback = function(value){
//     console.log(value)
// }

// myFunct(callback)

// Example 

// let players =["Rohit","Virat","Gill"]

// players.forEach((player)=>
// {
//     console.log(player)
// })

// players.forEach((player,index)=>
// {
//         console.log(player,index)
// })

// Object Literals

// let user={
//     firstname: "Mustafa",
//     lastname: "Poonawala",
//     age:21,
//     address:{
//         city: "Kharghar",
//         pincode: 410210
//     },
//     blogs: ["Java",".NET"],
    
//     login:function()
//     {
//         console.log(`${this.firstname} logged in`)
//     },

//     logout:()=>{
//         console.log(`${this.firstname} logged out`)
//     }

// }

let user={
    firstname: "Mustafa",
    lastname: "Poonawala",
    age:21,
    address:{
        city: "Kharghar",
        pincode: 410210
    },
    blogs: [
        {
            title: "Java",
            likes: 50,
            dislikes: 20
        },

        {
            title: ".NET",
            likes: 150
        },

        {
            title: "AI",
            likes: 250
        }
    ],
    
    login:function()
    {
        console.log(`${this.firstname} logged in`)
    },

    logout:()=>{
        console.log(`${this.firstname} logged out`)
    }

}

// console.log(user)
// console.log(user.firstname)
// console.log(user.lastname)
// console.log(user.address)
// console.log(user.blogs)
// console.log(user.address.city)

// user.login()
// user.logout()

// fxn that accepts user object and prints all blogs on separate line

// function userBlog(user)
// {
//    user.blogs.forEach(blog => {
//         console.log(blog)
//    });
// }

// userBlog(user)

// ------------------------------------ 

let functionPrintArrayOfObject=(user)=>
{
    console.log(`Blog-title\tLikes\tDislikes`)
    user.blogs.forEach(blog => 
    {
        
        console.log(`${blog.title}\t${blog.likes}\t${blog.dislikes}`)
    });
}

functionPrintArrayOfObject(user)
// function createUser({name: string, isPaid: boolean}) {}
// 
// createUser({name: "Juan", isPaid: false})
// 
// function createCourse():{name:string, price:number}{
//     return {
//         name:"Angular",
//         price: 912
//     }
// }

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }
// 
// type UserInputSanitizedString = string;
// 
// function createUser(user: User){}

type User = {
    readonly _id: number;
    name: string;
    email: string;
    isActive: boolean;
    credcardDetails?: number
}

let newUser: User = {
    _id: 12,
    name: "Juan",
    email: "juanita@j.com",
    isActive: false
}
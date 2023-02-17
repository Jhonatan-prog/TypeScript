function addNumber(num: number): number {
    return num + 5
}

addNumber(2)

function getUpper(str: string) {
    return str.toUpperCase()
}

getUpper("hello bro")

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

loginUser('Willian', 'willy@gymimi.com')

const heros = ['thor', 'spiderman', 'iroman'];
heros.map((hero): string => {
    return `the best hero is ${hero}`
})

function consoleError(errmsg: string): void  {
    console.log(errmsg)
}

function handleError(errmsg: string): never {
    throw new Error(errmsg)
    
}

export {};
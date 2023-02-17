let score: number | string = 1;
score = 55
score = "0"

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let JuanAndres: User | Admin = {
    name: "Juan Andres",
    id: 1900
}

JuanAndres = {
    username: 'JuanPez',
    id: 1900
}


function getID(id: string | number) {
    if (typeof id === 'string') {
        id.toLowerCase()
        return id
    }

    return id
}

getID(1)
getID('1')

// arrays

const data: (number | string)[] = [1, 2, 3, '4'];

let pi: 3.14 = 3.14;
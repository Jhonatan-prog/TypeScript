const scores: Array<number> = [];
const names: Array<string> = [];

function identityOne<Type>(val: Type): Type {
    return val
}

identityOne('hello')

interface User {
    readonly user_id: 1,
    username: string,
    email: string,
    password: string
}

function identityTwo<User>(u: User): User {
    return u
}

identityTwo({})

function getSomething<T>(val: T[]): T {
    let index = 3
    return val[index];
}

const getArray = <T,> (val: Array<T>):Function => {
    return getSomething([])
}

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) { // 'extends keyof' in this case is the key of the object (you can extend from anything even from an interface)
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");
getProperty(x, "b");


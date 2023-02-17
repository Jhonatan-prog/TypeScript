interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: number,
    getCoupon(couponame?: string): string
}

interface User {
    githubId: number
}

const newUser: User = {
    dbId: 2,
    email: "a@g.com",
    userId: 10,
    getCoupon: (couponame: "hello") => {
        return couponame
    },
    githubId: 2345
}
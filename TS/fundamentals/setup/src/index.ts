class User {
    protected _courseCount = 1 // protected this class and any other class extended from this one can use "_courseCount"

    constructor(
        public email: string, 
        public name: string | number,
        private readonly city: string = 'medellin'
        ) {

    }

    get get_courseCount(): number {
        return this._courseCount
    }

    set courseCount(num: number) {
        if (num < 0) {
            throw new Error('it must be greater than 0')
        } else {
            this._courseCount = num
        }
    }
}

class subUser extends User {
    isFamily: boolean = true;
    private changeValue() {
        this._courseCount = 2
    }
}

const willian = new User('willy@gmail.com', 'willian')
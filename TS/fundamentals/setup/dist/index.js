"use strict";
class User {
    constructor(email, name, city = 'medellin') {
        this.email = email;
        this.name = name;
        this.city = city;
        this._courseCount = 1; // protected this class and any other class extended from this one can use "_courseCount"
    }
    get get_courseCount() {
        return this._courseCount;
    }
    set courseCount(num) {
        if (num < 0) {
            throw new Error('it must be greater than 0');
        }
        else {
            this._courseCount = num;
        }
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeValue() {
        this._courseCount = 2;
    }
}
const willian = new User('willy@gmail.com', 'willian');

"use strict";
class TakePhoto {
    constructor(cameraMode, filter2) {
        this.cameraMode = cameraMode;
        this.filter2 = filter2;
    }
}
class Instagram2 extends TakePhoto {
    constructor(cameraMode, filter2) {
        super(cameraMode, filter2);
        this.cameraMode = cameraMode;
        this.filter2 = filter2;
    }
    getSepia() {
        console.log('nothing');
    }
}

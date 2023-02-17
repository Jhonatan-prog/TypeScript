"use strict";
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, createStory) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.createStory = createStory;
        createStory: () => {
            console.log("little by little");
        };
    }
}

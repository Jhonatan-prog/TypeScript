abstract class TakePhoto { // you can't create new objects with 'abstract class'
    constructor(
        public cameraMode: string,
        public filter2: string,
    ) {}

    abstract getSepia(): void
}

class Instagram2 extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter2: string,
    ) {
        super(cameraMode, filter2)
    }

    getSepia(): void {
        console.log('nothing')
    }
}
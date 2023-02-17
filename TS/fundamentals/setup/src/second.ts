interface TakePhoto {
    cameraMode: string,
    filter?: string,
    burst?: number
}

interface Story {
    createStory?(): void,
}

class Instagram {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

class Youtube  {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public createStory: () => {}
    ){
        createStory: () => {
            console.log("little by little")
        }
    }
}
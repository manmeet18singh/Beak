class soundController {
    constructor() {
        //        this.bgAudio = loadSound('../addons/Audio/title sketch.wav');
        this.bgAudio;
        this.playerAudio;
    }
    
    inputController(ins) {
        if (ins == 1) {
            this.bgAudio.play();
        }
    }

}
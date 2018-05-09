//var val;
class Soundtrack {
    constructor() {
        this.stemOne;
        this.stemTwo;
        this.stemOne;
        this.stemTwo;
        this.impact;
        this.amp;
        

    }
    soundSetup() {
        this.amp = new p5.Amplitude();
        this.amp.setInput(this.stemOne);
        this.impact.setVolume(0.2);
    }
    beginSeq(val) {
        val.playMode('untilDone')
        val.setVolume(0.8)
        val.loop();
    }

}
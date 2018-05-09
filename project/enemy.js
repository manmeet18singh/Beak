var enemy, rotDeg, time;

class Enemy { //should set enemy sound volume level to distance between it and sprite -> map dist to 0,1 scale

    constructor(sprite) {

        this.enemy = sprite;
        this.enemy.friction = 0.009;
        this.enemy.scale = .04;
        this.enemy.mass = 0.68;
        this.sound;
        this.amp;
        this.passThru = true;

    }

    move() {

        if (this.enemy.position.x < 30) {
            this.enemy.velocity.x *= -0.2;
            this.enemy.position.x = 30;
        }
        if (this.enemy.position.x > windowWidth - 30 && !this.passThru) {
            this.enemy.velocity.x *= -0.2;
            this.enemy.position.x = windowWidth - 30;
        }

        if (this.enemy.position.y < 30) {
            this.enemy.velocity.y *= -0.2;
            this.enemy.position.y = 30;
        }
        if (this.enemy.position.y > windowHeight - 30) {
            this.enemy.velocity.y *= -0.2;
            this.enemy.position.y = windowHeight - 30;
        }

        rotDeg = Math.atan2(ship.ship.position.y - this.enemy.position.y - 10, ship.ship.position.x - this.enemy.position.x - 10) * 180 / Math.PI;
        this.enemy.rotation = rotDeg;
        if (this.amp.getLevel() == 0) {
            this.sound.setVolume(0.4);
            this.sound.play();
        }
        this.enemy.changeAnimation("idle");
        this.enemy.setSpeed(strack.amp.getLevel() * 10, rotDeg);
        this.enemy.bounce(ship.ship);
        if (this.enemy.position.x <= windowWidth) {
            this.passThru = false;
        }

    }

    soundSetup() {
        this.amp = new p5.Amplitude();
        this.sound.setVolume(0);
        this.amp.setInput(this.sound);

    }
}
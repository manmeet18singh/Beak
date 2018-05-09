var rotDeg;
var sprint = 360;
var shieldAmt = 360;

class Ship {
    constructor(sprite) {
        this.ship = sprite;
        this.ship.friction = 0.009;
        this.ship.scale = .04;
        this.ship.mass = 0.92;
        this.sound;
        this.chargeSound;
        this.env;
        this.amp;
        this.amp2;
        this.healthAmt = 360;
        this.did_I_Attack = false;
        this.sprintDepleted = false;
    }

    move() {
        if (this.ship.position.x < 30) {
            this.ship.velocity.x *= -0.2;
            this.ship.position.x = 30;
        }
        if (this.ship.position.x > windowWidth - 30) {
            this.ship.velocity.x *= -0.2;
            this.ship.position.x = windowWidth - 30;
        }

        if (this.ship.position.y < 30) {
            this.ship.velocity.y *= -0.2;
            this.ship.position.y = 30;
        }
        if (this.ship.position.y > windowHeight - 30) {
            this.ship.velocity.y *= -0.2;
            this.ship.position.y = windowHeight - 30;
        }



        rotDeg = Math.atan2(camera.mouseY - this.ship.position.y - 10, camera.mouseX - this.ship.position.x - 10) * 180 / Math.PI;
        this.ship.rotation = rotDeg;

        if (keyDown('w') || keyDown('SHIFT')) {
            if (this.amp.getLevel() == 0) {
                this.sound.setVolume(1);
                this.sound.play();
            }
        }

        if (keyWentUp('w') || keyWentUp('SHIFT') || keyWentUp('SPACE')) {
            this.sound.fade(0, 3);
        }

        if (keyDown('w')) {
            this.did_I_Attack = false;
            if (dist(mouseX, mouseY, this.ship.position.x, this.ship.position.y) >= 30) {
                this.ship.setSpeed(3, rotDeg);
                if (keyDown('SHIFT')) {
                    if (sprint > 5 && this.sprintDepleted == false) {
                        sprint -= 5;
                        this.ship.setSpeed(20, rotDeg);
                        this.sprintDepleted = false;
                    } else {
                        this.sprintDepleted = true;
                    }
                }
            } else {
                this.ship.velocity.x = ((camera.mouseX - this.ship.position.x - 20) / 20) / 5;
                this.ship.velocity.y = ((camera.mouseY - this.ship.position.y - 20) / 20) / 5;
            }
        }

        if (sprint < 360 && this.sprintDepleted == true) {
            sprint += .5;
        }
        if (sprint == 360) {
            this.sprintDepleted = false;
        }

        if (keyWentUp('w')) {

            this.ship.velocity.x = ((camera.mouseX - this.ship.position.x - 20) / 20) / 5.5;
            this.ship.velocity.y = ((camera.mouseY - this.ship.position.y - 20) / 20) / 5.5;

        }

        if (keyDown('SPACE')) {
            this.did_I_Attack = true;
            this.ship.velocity.x = 0;
            this.ship.velocity.y = 0;
            this.attackAnimation();
        }

        if (keyWentUp('space') && sprint > 50) {
            sprint -= 50;
            this.ship.changeAnimation("attack");
            this.ship.animation.rewind();
            this.ship.setSpeed(40, rotDeg);
            this.ship.changeAnimation("idle");

        }


        this.health();

        if (this.ship.collide(enemy.enemy) && this.did_I_Attack == true) {
            this.healthAmt -= 2;
            shieldAmt -= 1;
            //            this.ship.velocity.x *= -1;
            updateAudio();
        }
        if (this.healthAmt < 0) {
            enemy.enemy.remove();
            this.healthAmt = .0001;
        }

        if (shieldAmt > 0) {
            this.shield();
            this.boost();
        }

        if (shieldAmt < 0 && this.ship.overlap(enemy.enemy)) {
            this.ship.remove();
        }
    }

    attackAnimation() {
        this.ship.changeAnimation("attack");
        this.ship.animation.frameDelay = .5;
        this.ship.animation.looping = false;
    }

    soundSetup() {
        this.amp = new p5.Amplitude();
        this.amp2 = new p5.Amplitude();
        this.chargeSound.playMode('restart');
        this.sound.playMode('restart');
        this.sound.setVolume(1);
        this.amp.setInput(this.sound);
        this.amp2.setInput(this.chargeSound);
    }

    boost() { //maybe a semicircle under the sprite instead of full circle?
        noFill();
        push();
        strokeWeight(4);
        stroke(0);
        arc(this.ship.position.x, this.ship.position.y, 150, 150, 0, sprint);
        pop();

        stroke('#FFD166');
        strokeWeight(3);
        arc(this.ship.position.x, this.ship.position.y, 150, 150, 0, sprint);
    }
    shield() {
        push();
        noStroke();
        fill(188, 244, 245, 155);
        arc(this.ship.position.x, this.ship.position.y, 150, 150, 0, shieldAmt, PIE);
        //        ellipse(this.ship.position.x, this.ship.position.y, 150, 150);
        pop();
    }
    health() {
        push();
        stroke(249, 54, 83);
        strokeWeight(5);
        noFill();
        arc(enemy.enemy.position.x, enemy.enemy.position.y, 150, 150, 0, this.healthAmt);
        pop();
    }

}
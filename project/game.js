var player, ship, enemy, sc, assets, n, strack, timer, val, s1Time, s2Time, s3Time, s4Time;

function preload() {
    assets = new Dumpster(windowWidth, windowHeight);

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    ship = new Ship(assets.player);
    enemy = new Enemy(assets.badGuy);
    strack = new Soundtrack();
    strack.stemOne = assets.stemOne;
    strack.stemTwo = assets.stemTwo;
    strack.stemThree = assets.stemThree;
    strack.stemFour = assets.stemFour;
    strack.impact = assets.playerImpact;
    ship.sound = assets.playerAudio;
    ship.chargeSound = assets.playerCharge;
    enemy.sound = assets.enemyAudio;
    ship.soundSetup();
    enemy.soundSetup();
    strack.soundSetup();
    n = 0;
    s1Time = false;
    s2Time = false;
    s3Time = false;
    s4Time = false;
    strokeWeight(1);
    stroke(26, 18, 8);
    angleMode(DEGREES);

}

function draw() {
    background(235, 213, 183);
    timer = millis();
    if (timer >= 8000 && !s1Time) {
        strack.beginSeq(strack.stemOne);
    }
    if (!strack.stemOne.isPlaying() && s2Time) {
        strack.beginSeq(strack.stemFour);

    }
    //    if (!strack.stemTwo.isPlaying() && s3Time) {
    //        strack.beginSeq(strack.stemThree);
    //
    //    }
    //    if (!strack.stemThree.isPlaying() && s4Time) {
    //        strack.beginSeq(strack.stemFour);
    //
    //
    //    }

    push();
    fill('#FF6978');
    ellipse(windowWidth / 2, windowHeight / 2, 500 + 4 * sin(frameCount / 20), 500 + 6 * cos(frameCount / 30));
    pop();
    n += 1;
    camera.position.x = windowWidth / 2 + sin(frameCount / 60);
    camera.position.y = windowHeight / 2 + cos(frameCount / 60);
    ship.move();
    enemy.move();
    drawSprites();
    push();
    strokeWeight(1);
    noStroke();
    fill(26, 18, 8, 200);
    ellipse(camera.mouseX, camera.mouseY, 5);
    pop();


}

function updateAudio() {
    strack.impact.play();
    if (strack.stemOne.isPlaying()) {
        strack.stemOne.setLoop(false);
        s1Time = true;
        s2Time = true;
    }
}
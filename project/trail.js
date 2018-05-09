var trails;

function putInTrails(x, y) {
    this.x = x;
    this.y = y;
    this.trails = [];

    this.putInTrail = function(x, y) {
        this.trails.push(new maketrail(this.x, this.y));
        if (this.trails.length > 25) {
            this.trails.splice(0, 1);
        }
    }

    this.showTrail = function() {
        beginShape();
        noFill();
        for (var i = 0; i < this.trails.length; i++) {
            var spritePos = this.trails[i];
            this.trails[i].display();
            vertex(spritePos.xPos, spritePos.yPos);
            //            ellipse(this.trails[i].xPos, this.trails[i].yPos, 5);
            console.log(this.trails[i].xPos);
            console.log(this.trails[i].yPos);
        }
        endShape();
    }


    function maketrail(x, y) {
        this.xPos = x;
        this.yPos = y;
        this.diam = 10;
        this.display = function() {
            fill('#FFD166');
            ellipse(this.xPos, this.yPos, this.diam);
        }
    }
}
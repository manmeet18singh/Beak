class Wall { //spawn invisible walls around the canvas edges to derive collision functionality
    constructor(x1, y1, x2, y2) {
        this.walls = new Group();
        this.walls.add(createSprite(x1, y1, 1, y2 * 2));
        this.walls.add(createSprite(x1, y1, x2 * 2, 1));
        this.walls.add(createSprite(x2, y2, 1, y2 * 2));
        this.walls.add(createSprite(x2, y2, x2 * 2, 1));
        this.setProp();
    }
    setProp(){
        for(var i  = 0; i < this.walls.length; i ++){
            this.walls.get(i).visible = false;
            this.walls.get(i).immovable = true;
            
        }
    }
}
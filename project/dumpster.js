class Dumpster {
    constructor(x, y) {
        this.player = createSprite(100, y / 2);
        this.player.addAnimation("idle", '../addons/Sprites/ShipIdle.png');
        this.player.addAnimation("attack", "../addons/Sprites/ShipAttack/sprite_00.png", "../addons/Sprites/ShipAttack/sprite_15.png");
        this.badGuy = createSprite(x + 200, y / 2);
        this.badGuy.addAnimation("idle", '../addons/Sprites/EnemyIdle.png');
        this.playerAudio = loadSound('../addons/Audio/player_move.wav');
        this.enemyAudio = loadSound('../addons/Audio/enemy_move.wav');
        this.stemOne = loadSound('../addons/Audio/layer_one.wav');
        this.stemTwo = loadSound('../addons/Audio/layer_two.wav');
        this.stemThree = loadSound('../addons/Audio/layer_three.wav');
        this.stemFour = loadSound('../addons/Audio/layer_four.wav');
        this.playerCharge = loadSound('../addons/Audio/player_charge.wav');
        this.playerImpact = loadSound('../addons/Audio/player_impact.wav');
    }
}
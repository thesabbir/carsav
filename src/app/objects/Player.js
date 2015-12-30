/*
 * Player
 * ============================================================================
 *
 */


export default class Player extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, 'player');

    this.anchor.set(0.5);
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.collideWorldBounds = true;
    this.cursors = game.input.keyboard.createCursorKeys();
    this.speed = 5;
    this.scale.x = 0.8;
    this.scale.y = 0.8;
    this.spacekey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    this.spacekey.onDown.add(this.dodge,this);

  }

  update() {

    if (this.cursors.left.isDown) {
      this.x -= this.speed;

    }

    else if (this.cursors.right.isDown) {
      this.x += this.speed;
    }

    if (this.cursors.up.isDown) {
      this.y -= this.speed;
    }
    else if (this.cursors.down.isDown) {
      this.y += this.speed;
    }

  }

  dodge() {

  }
}

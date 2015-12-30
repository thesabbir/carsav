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

  }

  update() {

    if (this.cursors.left.isDown) {
      this.x -= 5;

    }

    else if (this.cursors.right.isDown) {
      this.x += 5;
    }

    if (this.cursors.up.isDown) {
      this.y -= 5;
    }
    else if (this.cursors.down.isDown) {
      this.y += 5;
    }

    if(this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
      console.log('space');
      this.y = -10;
    }
  }
}

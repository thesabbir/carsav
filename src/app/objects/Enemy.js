/*
 * Enemies
 * ============================================================================
*/


export default class Enemy extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, 'enemycar');
    this.anchor.set(0.5);
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.scale(0.8);
    this.body.collideWorldBounds = true;
  }

  update() {

  }
}

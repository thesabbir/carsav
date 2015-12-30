/*
 * Enemies
 * ============================================================================
 */


export default class Enemy extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, 'enemycar');
    this.anchor.set(0.5, 0.5);
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.game.physics.setBoundsToWorld();
    this.checkWorldBounds = true;
    this.events.onOutOfBounds.add(this.carReset, this);
    this.scored = false;
  }

  update() {
    //move
    this.y += 5;

  }

  carReset() {
    this.reset(this.y, 0);
    this.y += 1;
    this.scored = false;

  }
}

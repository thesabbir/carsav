/*
 * Enemies
 * ============================================================================
 */


export default class Enemies extends Phaser.Group {
  constructor(game, number) {
    const lanes = [70, 180, 300, 420];
    //
    super(game, null, 'enemies', false, true, Phaser.Physics.ARCADE);
    this.enableBody = true;

    for (var i = 0; i < number; i++) {
      this.create(lanes[i], 0, 'enemycar');
    }

    this.setAll('anchor.x', 0.5);
    this.setAll('anchor.y', 0.5);
    this.setAll('scale.x', 0.7);
    this.setAll('scale.y', 0.7);
    this.setAll('checkWorldBounds', true);
    this.setAll('killWorldBounds', true);
    this.setAll('scoredOrNot', false);
    this.children.forEach((enemy) => {
      enemy.events.onOutOfBounds.add(this.carReset, enemy);
      enemy.body.velocity.y += Math.random() * 400;
      console.log(enemy);
    });

  }

  update() {

  }

  carReset() {
    console.log('out');
    this.reset(this.x, 0);
    this.body.velocity.y += Math.random() * 400;
  }
}

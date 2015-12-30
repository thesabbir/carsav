/*
 * Enemies
 * ============================================================================
 */



//
//
export default class Enemies extends Phaser.Group {
  constructor(game) {

    super(game, null, 'enemies', false, true, Phaser.Physics.ARCADE);
    this.speed = 2;
    this.spawnPoints = [[70, 0], [180, 0], [310, 0], [390, 0]];
    this.enableBody = true;
    this.game.time.events.loop(Phaser.Timer.SECOND * 2, this.spawner, this).timer.start();

  }

  update() {
    this.game.physics.arcade.collide(this);
    this.children.forEach((enemy) => {
      enemy.y += this.speed;
    });

  }

  spawner() {
    let point = this.game.rnd.integerInRange(0, 3)
    let [x, y] = this.spawnPoints[point];
    let enemycar = this.create(x, y, 'enemycar');
    enemycar.scored = false;
    enemycar.scale.x = 0.6;
    enemycar.scale.y = 0.6;
    enemycar.anchor.x = 0.5;
    enemycar.anchor.y = 0.5;
    enemycar.checkWorldBounds = true
  }


  carReset(enemy) {
    enemy.destroy();
  }
}

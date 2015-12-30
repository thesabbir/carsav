/*
 * Enemies
 * ============================================================================
 */


const spawn = [[70, 0], [180, 0], [310, 0], [390, 0]];
var speed = 200;

//
//
export default class Enemies extends Phaser.Group {
  constructor(game, number) {

    super(game, null, 'enemies', false, true, Phaser.Physics.ARCADE);
    this.enableBody = true;
    this.number = number;
    this.spawner(3000, this);
    this.scored = true;
    this.game.time.events.loop(Phaser.Timer.SECOND * 2, this.spawner, this).timer.start();


  }

  update() {
    this.game.physics.arcade.collide(this);
    this.children.forEach((enemy) => {
      enemy.y += 2;
    });

  }

  spawner() {
    //
    var point = this.game.rnd.integerInRange(0, 3);
    var enemycar = this.create(spawn[point][0], spawn[point][1], 'enemycar');
    enemycar.scored = false;
    enemycar.scale.x = 0.7;
    enemycar.scale.y = 0.7;
    enemycar.anchor.x = 0.7;
    enemycar.anchor.y = 0.7;
    enemycar.checkWorldBounds = true
  }


  carReset(enemy) {
    enemy.destroy();
  }
}

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
  }

  update() {
    this.game.physics.arcade.collide(this);
    this.children.forEach((enemy) => {
      enemy.y += 2;
    });

  }


  spawner(delay, self) {
    var point = self.game.rnd.integerInRange(0,3);
    console.log(point);
    console.log(spawn[point][0]);
    console.log(spawn[point][1]);
    this.game.time.events.add(delay, () => {
      self.create(spawn[point][0], spawn[point][1], 'enemycar');
      this.setAll('anchor.x', 0.5);
      this.setAll('anchor.y', 0.5);
      this.setAll('scale.x', 0.7);
      this.setAll('scale.y', 0.7);
      this.setAll('checkWorldBounds', true);
      this.setAll('scoredOrNot', false);
      this.spawner(delay, self);
    });
  }


  carReset(enemy) {
    console.log('out');
    enemy.destroy();
  }
}

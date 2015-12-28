/*
 * Game state
 * ============================================================================
 *
 * A sample Game state, displaying the Phaser logo.
 */


export default class Game extends Phaser.State {

  create () {
    const { centerX: x, centerY: y } = this.world;

    this.road = this.add.image(x, y, 'road');
    this.road.anchor.set(0.5);

    this.player = this.add.image(x, y, 'player');
    this.player.anchor.set(0);

  }

  update () {
    this.road.y += 10;
    if(this.road.y > 640) {
      this.road.y = 0;
    }
    console.log(this.road.y);
  }

}

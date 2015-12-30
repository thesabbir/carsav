/*
 * Road background
 * ============================================================================
 *
 */


export default class Road extends Phaser.Image {

  constructor(game, x, y) {
    super(game, x, y, 'road');
    this.anchor.set(0.5);

  }

  update() {
    this.y += 10;
    if (this.y > 640) {
      this.y = 0;
    }

  }

}

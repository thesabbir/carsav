/*
 * GameOver state
 *
 * game over state
 */


export default class GameOver extends Phaser.State {

  create () {
    this.stage.backgroundColor = '#fff';
    let style = { font: "bold 20px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };

    this.text = this.add.text(this.world.centerX, this.world.centerY, "Game Over!", style);
    this.continue = this.add.text(100, 600, "Press spacebar to continue!", style);
  }

  update() {
    if(this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
      this.state.start('Game');

    }
  }
}

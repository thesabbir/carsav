/*
 * GameOver state
 *
 * game over state
 */


export default class GameOver extends Phaser.State {

  create () {
    this.stage.backgroundColor = '#000';
    let style = { font: "bold 20px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
    this.text = this.add.text(this.world.centerX, this.world.centerY, "Game Over!", style);
    this.text.anchor.set(0.5,0.5);
    this.continue = this.add.text(this.world.centerX, this.world.centerY + 100, "Press spacebar to continue!", style);
    this.continue.anchor.set(0.5,0.5);
  }

  update() {
    if(this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
      this.state.start('Game');

    }
  }
}

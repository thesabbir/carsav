/*
 * GameOver state
 *
 * game over state
 */


export default class GameOver extends Phaser.State {

  create () {
    //this.stage.backgroundColor = 0x333333;
    let style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

    this.text = this.add.text(0, 20, "Game Over! Press space bar to retry!!", style);
    this.text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
  }

  update() {
    if(this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
      this.state.start('Game');

    }
  }
}

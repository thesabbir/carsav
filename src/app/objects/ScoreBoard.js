/*
 * ScoreBoard
 */


export default class ScoreBoard extends Phaser.Text {
  constructor (game, score=0) {
    super(game, 300, 20, `Total Score:  ${score}`, {font: '30px', fill: '#fff'});
    this.score = score;
  }

  // Score Updater Method
  updateScore(add)  {
    this.score += add;
    this.setText(`Total Score:  ${this.score}`);
  }

}

/*
 * Game state
 * ============================================================================
 *
 * A sample Game state, displaying the Phaser logo.
 */

import Road from '../objects/Road';
import Player from '../objects/Player';
import Enemies from '../objects/Enemies';

export default class Game extends Phaser.State {

  create() {
    const { centerX: x, centerY: y } = this.world;

    this.game.world.setBounds(0, 0, 480, 640);
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.road = this.add.existing(new Road(this.game, x, y));
    this.player = this.add.existing(new Player(this.game, x, 500));
    this.enemies = this.add.existing(new Enemies(this.game, 4));
    this.camera.follow(this.player);
    this.scoring();
    console.log(this.enemies);

  }

  update() {
    this.enemies.forEach((enemy) => {
      this.game.physics.arcade.overlap(this.player, enemy, this.accident, null, this);
    })
  }

  accident() {
    console.log('Game over');
    this.state.start('GameOver');
  }
//score
  scoring() {
    this.score = 0;
    this.scoreText = this.add.text(300, 20, "Total Score: "+ this.score.toString(), {font: '30px', fill: '#fff'});
  }

  scoreIncrease(points) {
    this.enemy.scored = true;
    this.score += points;
    this.scoreText.setText("Total Score: " + this.score.toString());
  }
}

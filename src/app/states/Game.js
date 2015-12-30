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
    this.score = 0;
    this.road = this.add.existing(new Road(this.game, x, y));
    this.player = this.add.existing(new Player(this.game, x, 500));
    this.enemies = this.add.existing(new Enemies(this.game, 4));
    this.camera.follow(this.player);
    this.scoring();

  }

  update() {
    this.enemies.forEach((enemy) => {
      this.game.physics.arcade.overlap(this.player, enemy, this.accident, null, this);
      if (!enemy.scored) {
        //
        if ((this.player.y - enemy.y) < 5 && (this.player.y - enemy.y) > 0) {
          this.scoreIncrease(enemy, 5);
        }
      }
    });
  }

  accident() {
    this.state.start('GameOver');
  }

//score
  scoring() {
    this.score = 0;
    this.scoreText = this.add.text(300, 20, "Total Score: " + this.score.toString(), {font: '30px', fill: '#fff'});
  }

//
  scoreIncrease(enemy, points) {
    enemy.scored = true;
    this.score += points;
    this.scoreText.setText("Total Score: " + this.score.toString());
  }
}

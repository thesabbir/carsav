/*
 * Game state
 * ============================================================================
 *
 * A sample Game state, displaying the Phaser logo.
 */

import Road from '../objects/Road';
import Player from '../objects/Player';
import Enemies from '../objects/Enemies';
import ScoreBoard from '../objects/ScoreBoard';

export default class Game extends Phaser.State {

  create() {
    const { centerX: x, centerY: y } = this.world;

    this.game.world.setBounds(0, 0, 480, 640);
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    //Load objects
    this.road = this.add.existing(new Road(this.game, x, y));
    this.player = this.add.existing(new Player(this.game, x, 500));
    this.enemies = this.add.existing(new Enemies(this.game));
    this.scoreBoard = this.add.existing(new ScoreBoard(this.game, 0));
    this.game.camera.follow(this.player);

  }

  update() {
    this.enemies.forEach((enemy) => {
      this.game.physics.arcade.overlap(this.player, enemy, this.accident, null, this);

      //Checking if this car was already scored
      if (!enemy.scored) {
        //We passed it or not
        if ((this.player.y - enemy.y) < 10 && (this.player.y - enemy.y) > 0) {
          enemy.scored = true;
          //Increase the score
          this.scoreBoard.updateScore(5);
        }
      }
    });
  }

  accident() {
    //Accident? You are doomed :(
    this.state.start('GameOver');
  }
}

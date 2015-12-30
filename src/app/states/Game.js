/*
 * Game state
 * ============================================================================
 *
 * A sample Game state, displaying the Phaser logo.
 */

import Road from '../objects/Road';
import Player from '../objects/Player';
import Enemy from '../objects/Enemy';

export default class Game extends Phaser.State {

  create() {
    const { centerX: x, centerY: y } = this.world;

    this.game.world.setBounds(0, 0, 480, 640);
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.road = this.add.existing(new Road(this.game, x, y));
    this.player = this.add.existing(new Player(this.game, x, 500));
    this.enemy = this.add.existing(new Enemy(this.game, 50, 0));
    this.camera.follow(this.player);
    this.score = 0;
    this.scoreText = this.add.text(300, 20, this.score.toString(), {font: '30px', fill: '#fff'});

  }

  update() {
    this.game.physics.arcade.overlap(this.player, this.enemy, this.accident, null, this);

    if (!this.enemy.scored) {
      if ((this.player.y - this.enemy.y) <= 5 && (this.player.y - this.enemy.y) > 0) {
        this.scoreIncrease(this);
      }
    }

  }

  accident() {
    console.log('Game over');
    this.state.start('GameOver');
  }

  scoreIncrease(game) {
    game.enemy.scored = true;
    game.score += 5;
    game.scoreText.setText(game.score.toString());
    console.log('scored!');
  }
}

var game = new Phaser.Game(400, 490, Phaser.AUTO, '')

function Main() {};

Main.prototype = {
  preload: function(){
  },
  create: function(){
  },
  update: function(){
  }
};

game.state.add('main', Main);
game.state.start('main');

function Roulette() {

  this.number =
  this.colour = ''
};

Roulette.prototype.setColourToBlack = function() {
  this.colour = "black"
};

Roulette.prototype.setColourToRed = function() {
  this.colour = "red"
};

Roulette.prototype.setColourToNumbers = function() {
  if (this.number == 0)
  { this.colour = null }
  else if (this.number == 1)
  { this.colour = 'red'}

};

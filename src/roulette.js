function Roulette() {

  this.number =
  this.colour = ''
  this.third = ''
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
  else
  { this.colour = 'black'}
};

Roulette.prototype.setThirdToNumber = function () {
  if (this.number < 13)
  { this.third = 1 }
  else if ((this.number >= 13) && (this.number <= 24))
  { this.third = 2 }
  else if ((this.number >= 25) && (this.number <= 36))
  { this.third = 3 }
  else this.third = null
};

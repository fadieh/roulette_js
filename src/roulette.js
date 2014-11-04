function Roulette() {

  this.number =
  this.colour =
  this.third = ''
  this.turnTaken = false
  this.totalBet = 0
};

// SETTING COLOURS TO NUMBERS

Roulette.prototype.setColourToNumbers = function() {
  wheel = [null, "red", "black", "red", "black", "red", "black", "red", "black", "red", "black", "black", "red", "black", "red", "black", "red", "black", "red", "red", "black", "red", "black", "red", "black", "red", "black", "red", "black", "black", "red", "black", "red", "black", "red", "black", "red"];
  this.colour = wheel[this.number];
};

Roulette.prototype.setColourToBlack = function() {
  this.colour = "black"
};

Roulette.prototype.setColourToRed = function() {
  this.colour = "red"
};

Roulette.prototype.setZeroToNoColour = function() {
  this.colour = null
};

// SETTING THIRDS TO NUMBERS

Roulette.prototype.setThirdToNumber = function () {
  if (this.number < 13)
  { this.third = 1 }
  else if ((this.number >= 13) && (this.number <= 24))
  { this.third = 2 }
  else if ((this.number >= 25) && (this.number <= 36))
  { this.third = 3 }
  else this.third = null
};

Roulette.prototype.takeTurn = function () {
  this.turnTaken = true
  this.number = Math.floor((Math.random()*36) + 0);
  this.setColourToNumbers()
  this.setThirdToNumber()
};

Roulette.prototype.placeBet = function(bet) {
  this.totalBet = this.totalBet + bet
};

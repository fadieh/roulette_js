function Roulette() {

  this.number =
  this.colour =
  this.third = ''
  this.turnTaken = false
  this.totalBet = 0
  this.winnings = 0
  this.row = 0
  this.parity = 'odd'
};

// SETTING COLOURS TO NUMBERS

Roulette.prototype.setColourToNumbers = function() {
  wheel = [null, "red", "black", "red", "black", "red", "black", "red", "black", "red", "black", "black", "red", "black", "red", "black", "red", "black", "red", "red", "black", "red", "black", "red", "black", "red", "black", "red", "black", "black", "red", "black", "red", "black", "red", "black", "red"];
  this.colour = wheel[this.number];
};

// SETTING THIRDS/ROWS TO NUMBERS

Roulette.prototype.setThirdToNumber = function () {
  if ((this.number > 0) && (this.number < 13))
  { this.third = 1 }
  else if ((this.number >= 13) && (this.number <= 24))
  { this.third = 2 }
  else if ((this.number >= 25) && (this.number <= 36))
  { this.third = 3 }
  else this.third = null
};

Roulette.prototype.setRowToNumber = function () {
  this.row = 1
};

// GAMEPLAY

Roulette.prototype.takeTurn = function () {
  this.turnTaken = true
  this.number = Math.floor((Math.random()*36) + 0);
  this.setColourToNumbers()
  this.setThirdToNumber()
  this.totalBet = 0
};

// BETTING

Roulette.prototype.placeBet = function(bet) {
  this.totalBet = this.totalBet + bet
};

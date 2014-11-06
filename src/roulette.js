function Roulette() {

  this.number =
  this.colour =
  this.third = ''
  this.turnTaken = false
  this.totalBet = 0
  this.winnings = 0
  this.row = 0
  this.parity = 'odd'
  this.range = '1-18'
};

// ---- GAMEPLAY ----
// -- TAKING A TURN --

Roulette.prototype.takeTurn = function () {
  this.turnTaken = true
  this.totalBet = 0
  this.setColourToNumbers()
  this.setParity()
  this.setThirdToNumber()
  this.setRowToNumber()
  this.setRange()
};

// COLOURS, PARITY, THIRDS
//

Roulette.prototype.setColourToNumbers = function() {
  wheel = [null, "red", "black", "red", "black", "red", "black", "red", "black", "red", "black", "black", "red", "black", "red", "black", "red", "black", "red", "red", "black", "red", "black", "red", "black", "red", "black", "red", "black", "black", "red", "black", "red", "black", "red", "black", "red"];
  this.colour = wheel[this.number];
};

Roulette.prototype.setParity = function() {
  if (this.number % 2 === 0)
  { this.parity = 'even' }
  else if (this.number % 2 === 1)
  { this.parity = 'odd' }
  else { this.parity = null }
};

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

Roulette.prototype.setRange = function () {
  if ((this.number > 0) && (this.number <= 18))
  { this.range = '1-18'}
  else if ((this.number >= 19) && (this.number <= 36))
  { this.range = '19-36'}
};

// BETTING

Roulette.prototype.placeBet = function(bet) {
  this.totalBet = this.totalBet + bet
};

Roulette.prototype.placeBetOnNumber = function(bet, number) {
  this.winnings = bet * 35
};

Roulette.prototype.placeBetOn2Numbers = function(bet, number1, number2) {
  this.winnings = bet * 17
};

Roulette.prototype.placeBetOn4Numbers = function(bet, number1,number2,number3,number4) {
  this.winnings = bet * 8
};

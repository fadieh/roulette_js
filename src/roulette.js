function Roulette() {

  this.number = 0
  this.colour = ''
  this.third = ''
  this.turnTaken = false
  this.totalBet = 0
  this.winnings = 0
  this.row = 0
  this.parity = 'odd'
  this.range = '1-18'
  this.singleBet = []
  this.doubleBet = []
  this.quadBet = []
  this.colourBet = []
  this.parityBet = []
  this.thirdBet = []
  this.rowBet = []
  this.rangeBet = []
};

// ---- GAMEPLAY ----
// -- TAKING A TURN --

Roulette.prototype.takeTurn = function () {
  this.number = Math.floor((Math.random()*36) + 0);
  this.turnTaken = true
  this.totalBet = 0
  this.setColourToNumbers()
  this.setParity(this.number)
  this.setThirdToNumber()
  this.setRowToNumber()
  this.setRange()
  this.setWinnings()
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
  if (this.number % 3 === 1)
    { this.row = 1 }
  else if (this.number % 3 == 2)
    { this.row = 2 }
  else if (this.number % 3 == 0)
    { this.row = 3 }
};

Roulette.prototype.setRange = function () {
  if ((this.number > 0) && (this.number <= 18))
  { this.range = '1-18' }
  else if ((this.number >= 19) && (this.number <= 36))
  { this.range = '19-36' }
};


// BETTING 
// 

Roulette.prototype.placeBet = function(bet) {
  this.totalBet = this.totalBet + bet
};

Roulette.prototype.placeBetOnNumber = function(bet, number) {
  this.placeBet(bet)
  this.singleBet.push([bet, number])
};

Roulette.prototype.placeBetOn2Numbers = function(bet, number1, number2) {
  this.placeBet(bet)
  this.doubleBet.push([bet, number1, number2])
};

Roulette.prototype.placeBetOn4Numbers = function(bet, number1,number2,number3,number4) {
  this.placeBet(bet) 
  this.quadBet.push([bet, number1,number2,number3,number4])
};

Roulette.prototype.placeBetOnColour = function(bet, colour) {
  this.placeBet(bet)
  this.colourBet.push([bet, colour])
};

Roulette.prototype.placeBetOnParity = function(bet, parity) {
  this.placeBet(bet)
  this.parityBet.push([bet, parity])
};

Roulette.prototype.placeBetOnThird = function(bet, third) {
  this.placeBet(bet)
  this.thirdBet.push([bet, third])
};

Roulette.prototype.placeBetOnRow = function(bet, row) {
  this.placeBet(bet)
  this.rowBet.push([bet, row])
};

Roulette.prototype.placeBetOnRange = function(bet, range) {
  this.placeBet(bet)
  this.rangeBet.push([bet,range])
};

Roulette.prototype.setWinnings = function() {
};

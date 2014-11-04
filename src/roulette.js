function Roulette() {

  this.number =
  this.colour =
  this.third = ''
  this.turnTaken = false
};

// SETTING COLOURS TO NUMBERS

Roulette.prototype.setColourToNumbers = function() {
  var wheel = [null, "red", "black", "red", "black", "red", "black", "red", "black", "red", "black", "black", "red", "black", "red", "black", "red", "black", "red", "red", "black", "red", "black", "red", "black", "red", "black", "red", "black", "black", "red", "black", "red", "black", "red", "black", "red"];
  this.colour = wheel[this.number];

  // this.colour = 3;
  // var colors = {
  //   'red' : [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35],
  //   'black' : [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]
  // }
  //
  // for (var k in colors) {
  //   if (colors[k].indexOf(this.number) > 0) {
  //     this.colour = k;
  //   }
  // }
};


//   if (this.number == 2 || this.number == 4 || this.number == 6 || this.number == 8 || this.number == 10 || this.number == 11 || this.number == 13 || this.number == 15 || this.number == 17 || this.number == 20 || this.number == 22 || this.number == 24 || this.number == 26 || this.number == 29 || this.number == 28 || this.number == 29 || this.number == 31 || this.number == 33 || this.number == 35)
//   { this.setColourToBlack() }
//   else if (this.number == 1 || this.number == 3 || this.number == 5 || this.number == 7 || this.number == 9 || this.number == 12 || this.number == 14 || this.number == 16 || this.number == 18 || this.number == 19 || this.number == 21 || this.number == 23 || this.number == 25 || this.number == 27 || this.number == 30 || this.number == 32 || this.number == 34 || this.number == 36)
//   { this.setColourToRed() }
//   else
//   { this.colour = null}


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

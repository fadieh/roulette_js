describe ('Roulette', function() {

  beforeEach(function(){
      roulette = new Roulette
  });

it ('0 has no colour', function(){
  roulette.number = 0
  roulette.setColourToNumbers()
  expect(roulette.colour).toBe(null)
});

it ('1 should be red', function(){
  roulette.number = 1
  roulette.setColourToNumbers()
  expect(roulette.colour).toBe('red')
});

it ('2 should be black', function(){
  roulette.number = 2
  roulette.setColourToNumbers()
  expect(roulette.colour).toBe('black')
});

it ('1 should have the third type of 1', function(){
  roulette.number = 1
  roulette.setThirdToNumber()
  expect(roulette.third).toBe(1)
});

it ('13 should have the third type of 2', function(){
  roulette.number = 13
  roulette.setThirdToNumber()
  expect(roulette.third).toBe(2)
});

it ('25 should have the third type of 3', function(){
  roulette.number = 25
  roulette.setThirdToNumber()
  expect(roulette.third).toBe(3)
});

it ('should be able to take a turn', function(){
  roulette.takeTurn()
  expect(roulette.turnTaken).toBe(true)
});

it ('should randomly generate a number when a turn is taken', function(){
  roulette.takeTurn()
  expect(roulette.number).toBeGreaterThan(-1)
  expect(roulette.number).toBeLessThan(37)
});

it ('1 should be row 1', function(){
  roulette.number = 1
  roulette.setRowToNumber()
  expect(roulette.row).toEqual(1)
});

it ('2 should be row 2', function(){
  roulette.number = 2
  roulette.setRowToNumber()
  expect(roulette.row).toEqual(2)
});

it ('3 should be row 3', function(){
  roulette.number = 3
  roulette.setRowToNumber()
  expect(roulette.row).toEqual(3)
});

it ('4 should be row 1', function(){
  roulette.number = 4
  roulette.setRowToNumber()
  expect(roulette.row).toEqual(1)
});

it ('5 should be row 2', function(){
  roulette.number = 5
  roulette.setRowToNumber()
  expect(roulette.row).toEqual(2)
});

it ('6 should be row 3', function(){
  roulette.number = 6
  roulette.setRowToNumber()
  expect(roulette.row).toEqual(3)
});

it ('numbers can be odd', function(){
  roulette.number = 1
  roulette.setParity()
  expect(roulette.parity).toEqual('odd')
});

it ('numbers can be even', function(){
  roulette.number = 2
  roulette.setParity()
  expect(roulette.parity).toEqual('even')
});

it ('numbers are 1 to 18', function(){
  roulette.number = 18
  roulette.setRange()
  expect(roulette.range).toEqual('1-18')
});

it ('numbers are 18-36', function(){
  roulette.number = 19
  roulette.setRange()
  expect(roulette.range).toEqual('19-36')
});

//
// BETTING
//

it ('should be able to place a bet', function(){
  roulette.placeBet(1)
  roulette.placeBet(2)
  expect(roulette.totalBet).toEqual(3)
});

it ('should clear total bet after a turn is taken', function(){
  roulette.placeBet(10)
  roulette.takeTurn()
  expect(roulette.totalBet).toEqual(0)
});

it ('should be able to record single number bet', function(){
  roulette.placeBetOnNumber(1, 2)
  expect(roulette.singleBet).toEqual([2])
});

it ('should be able to record double number bet', function(){
  roulette.placeBetOn2Numbers(1, 2, 3)
  expect(roulette.doubleBet).toEqual([2,3])
});

it ('should be able to record quadrople number bet', function(){
  roulette.placeBetOn4Numbers(1, 2,3,4,5)
  expect(roulette.quadBet).toEqual([2,3,4,5])
});

// it ('should be able to win a bet', function(){

// });

});

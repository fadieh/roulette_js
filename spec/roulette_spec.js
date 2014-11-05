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

it ('numbers should have a row', function(){
  roulette.number = 1
  roulette.setRowToNumber()
  expect(roulette.row).toEqual(1)
});

});

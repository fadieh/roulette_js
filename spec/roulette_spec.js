describe ('Roulette', function() {

  beforeEach(function(){
      roulette = new Roulette
  });

it ('will have a colour type red', function(){
  roulette.setColourToRed()
  expect(roulette.colour).toEqual("red")
});

it ('will have a colour type black', function(){
  roulette.setColourToBlack()
  expect(roulette.colour).toEqual("black")
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

});

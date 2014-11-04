describe ('Roulette', function() {

  beforeEach(function(){
      roulette = new Roulette
  });

it ('will have a range of numbers', function(){
  expect(roulette.numbers.length).toEqual(37)
});

it ('will have a colour type red', function(){
  roulette.setColourToRed()
  expect(roulette.colour).toEqual("red")
});

it ('will have a colour type black', function(){
  roulette.setColourToBlack()
  expect(roulette.colour).toEqual("black")
});

});

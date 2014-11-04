describe ('Roulette', function() {

  beforeEach(function(){
      roulette = new Roulette
  });

it ('will have a range of numbers', function(){
  expect(roulette.numbers.length).toEqual(37)
});

});

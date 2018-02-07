
const EDGE = 500;

TweenMax.to('.cloud-small', 3, {
  x: '-=500', //move each box 500px to right
  ease: Power0.easeNone,
  modifiers: {
    x: function(x) {
      // if (x === )
      // console.log(Math.abs(x) ===  ? x % -500 : x % -500)
      // return Math.abs(x) === 500 ? x % -500 : x % -500; //force x value to be between 0 and 500 using modulus
      return x % 500;
    },
  },
  repeat: -1,
});

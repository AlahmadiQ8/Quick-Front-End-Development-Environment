
const EDGE = 1300;

TweenMax.set('.cloud-small', {
  visibility: 'visible',
  x: '50%',
})

const tween = TweenMax.to('.cloud-small', 30, {
  x: `${EDGE}`, //move each box 500px to right
  ease: Power0.easeNone,
  modifiers: {
    x: function(x) {
      return (x % EDGE) - EDGE/2;
    },
  },
  repeat: -1,
});

tween.seek(25);

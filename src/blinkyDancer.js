var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // console.log('makeDancer was called');
  //this.$node = $('<span class="ti"></span>')
  //this.oldStep = makeDancer.step;
  // this.step();
  // this.$node.toggle();
  //this.oldStep = this.step.bind(makeDancer);
  
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

//need to create oldStep var that references the step method in blinkyDancer
//makeBlinkyDancer.prototype.oldStep = this.step;

makeBlinkyDancer.prototype.step = function() {
  // Object.getPrototypeOf(makeDancer.prototype).step.call(this);
  // setTimeout(this.step.bind(this, timeBetweenSteps), timeBetweenSteps);
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
  // console.log('blinkyDancer.step has run');
};

// var makeBlinkyDancerStep = new makeBlinkyDancer();
// makeBlinkyDancerStep.step();
// console.log('new makeBlinky ran');
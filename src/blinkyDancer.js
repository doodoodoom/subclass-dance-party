var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
}

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

//need to create oldStep var that references the step method in blinkyDancer
//makeBlinkyDancer.prototype.oldStep = this.step;

makeBlinkyDancer.prototype.step = function() {
  //oldStep();
  //this.$node.toggle();
};
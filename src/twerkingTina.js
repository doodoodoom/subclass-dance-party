var twerkingTina = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span class="dancer"></span>');
  //this.$node.css("color", "green");
  // this.top = top;
  // this.left = left;
  this.$node.css('color', 'green');
};

twerkingTina.prototype = Object.create(makeDancer.prototype);
twerkingTina.prototype.constructor = twerkingTina;


twerkingTina.prototype.step = function() {
  // Object.getPrototypeOf(makeDancer.prototype).step.call(this);
  // setTimeout(this.step.bind(this, timeBetweenSteps), timeBetweenSteps);
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
  //this.$node.toggle();
  
};


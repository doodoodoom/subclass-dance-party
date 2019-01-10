var makeDancer = function(top, left, timeBetweenSteps) {
  // new Obj is created 

  //do not need to manually define dancer obj
  //need $node
  this.$node = $('<span class="dancer"></span>');
  this.step();
  //this.setPosition(top, left);
  
  // new Obj is returned when invoked with 'new'
};



makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
      top: top,
      left: left
    };
  this.$node.css(styleSettings);
};

// makeDance(0 auto, auto, 1000)
var makeDancer = function(top, left, timeBetweenSteps) {
  // new Obj is created 

  //do not need to manually define dancer obj
  //need $node
  this.$node = $('<span class="dancer"></span>');
  //this.top = top;
  //this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.top = top;
  this.left = left;
  // console.log('makeDancer class was run up to timeBetween');
  //this.step(this.timeBetweenSteps);
  //console.log('makeDancer this.step was run');
  this.setPosition(top, left);
  
  // new Obj is returned when invoked with 'new'
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  console.log("makeDancer.step has run");
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
  console.log('makeDance.setPosition was run');
};

// makeDance(0 auto, auto, 1000)

// var makeDancer = function(top, left, timeBetweenSteps) {
//   var obj = Object.create(this)
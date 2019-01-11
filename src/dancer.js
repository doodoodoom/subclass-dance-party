var makeDancer = function(top, left, timeBetweenSteps) {
  // new Obj is created 

  //do not need to manually define dancer obj
  //need $node
  this.$node = $('<span class="dancer"></span>');
  console.log(this.$node);
  // this.top = top;
  //this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  // console.log('makeDancer class was run up to timeBetween');
  //this.step(this.timeBetweenSteps);
  //console.log('makeDancer this.step was run');
  this.setPosition(top, left);
  
  this.$node.on('mouseover', function() {
    $(this).css('color', 'white');
  });
  
  // new Obj is returned when invoked with 'new'
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  // console.log('makeDancer.step has run');
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left,
    color: 'blue'
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function() {
  this.$node.css('left', 50);  
};

// makeDance(0 auto, auto, 1000)

// var makeDancer = function(top, left, timeBetweenSteps) {
//   var obj = Object.create(this)
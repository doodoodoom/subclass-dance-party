describe('pumpinPeter', function() {
  var pumpPeter, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    pumpPeter = new pumpinPeter(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(pumpPeter.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(pumpPeter.$node, 'toggle');
    pumpPeter.step();
    expect(pumpPeter.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(pumpPeter, 'step');
      expect(pumpPeter.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(pumpPeter.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(pumpPeter.step.callCount).to.be.equal(2);
    });
  });
});

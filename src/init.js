$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    console.log(window.dancers);
  });

  $('.addTinaButton').on('click', function(event) {
    var tinaFunctionName = $(this).data('tina-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var tinaMakerFunction = window[tinaFunctionName];
    // make a dancer with a random position
    var tinaDancer = new tinaMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    //tinaDancer.$node.css("color", "green");
    $('body').append(tinaDancer.$node);
    window.dancers.push(tinaDancer);
    console.log(window.dancers);
  });

  $('.addPeterButton').on('click', function(event) {
    var peterFunctionName = $(this).data('peter-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var peterMakerFunction = window[peterFunctionName];
    // make a dancer with a random position
    var peterDancer = new peterMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    //peterDancer.$node.css("color", "green");
    $('body').append(peterDancer.$node);
    window.dancers.push(peterDancer);
    console.log(window.dancers);
  });

  $('.lineUpButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i ++) {
      window.dancers[i].lineUp();
    }
  });
});


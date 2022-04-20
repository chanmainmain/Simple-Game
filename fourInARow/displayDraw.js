function displayDraw() {
    $("#game").hide();
    var result = $("#result");
    //display result animation
    result.show();
    $("#displayWinner").text("DRAW!!!!!!");
    result.animate({
      fontSize: '1em',
      width: '200px'
    });

    result.animate({
      height: '200px',
      opacity: '0.5'
    });
    result.animate({
      width: '950px',
      opacity: '1.5'
    });
    result.animate({
      fontSize: '4em'
    });
  }

function displayWinner() {
    $("#game").hide();
    var result = $("#result");
    var winner = findWinner() + " is WINNER !!!!!"

    //display result animation
    result.show();


    $("#displayWinner").text(winner);
    result.animate({
      fontSize: '1em',
      width: '200px',
      height: '100px'
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
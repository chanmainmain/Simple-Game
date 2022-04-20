  function currentTurn(currentPlayer) {
    if (currentPlayer == "R"){
      $("#yellow_turn").addClass("currentPlayer");
      $("#red_turn").removeClass("currentPlayer");
    }else{
      $("#red_turn").addClass("currentPlayer");
      $("#yellow_turn").removeClass("currentPlayer");
    }    
  }
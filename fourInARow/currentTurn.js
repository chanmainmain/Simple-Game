  function currentTurn(currentPlayer) {
    if (currentPlayer == "Black"){
      $("#white_turn").addClass("currentPlayer");
      $("#black_turn").removeClass("currentPlayer");
    }else{
      $("#black_turn").addClass("currentPlayer");
      $("#white_turn").removeClass("currentPlayer");
    }    
  }
  function currentTurn(currentPlayer) {
    if (currentPlayer == "X"){
      $("#o_turn").addClass("currentPlayer");
      $("#x_turn").removeClass("currentPlayer");
    }else{
      $("#x_turn").addClass("currentPlayer");
      $("#o_turn").removeClass("currentPlayer");
    }    
  }
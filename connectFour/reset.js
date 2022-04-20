function reset(player) {
    if (player == "R"){
      $("#red_turn").addClass("currentPlayer");
      $("#yellow_turn").removeClass("currentPlayer");
    }else{
      $("#yellow_turn").addClass("currentPlayer");
      $("#red_turn").removeClass("currentPlayer");
    }    
    
  }
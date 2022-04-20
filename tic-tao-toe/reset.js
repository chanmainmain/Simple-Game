function reset(player) {
    $("#board td").empty().mouseover(function() {
            $(this).removeClass("td_attack");
          })
    if (player == "X"){
      $("#x_turn").addClass("currentPlayer");
      $("#o_turn").removeClass("currentPlayer");
    }else{
      $("#o_turn").addClass("currentPlayer");
      $("#x_turn").removeClass("currentPlayer");
    }    
    
  }
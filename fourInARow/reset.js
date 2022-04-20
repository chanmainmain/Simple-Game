function reset(role) {
    $("#board td").empty().css("backgroundColor","#1b5e20");
    if (role == "Black") {
        $("#black_turn").addClass("currentPlayer");
        $("#white_turn").removeClass("currentPlayer");
    } else {
        $("#white_turn").addClass("currentPlayer");
        $("#black_turn").removeClass("currentPlayer");
    }

}
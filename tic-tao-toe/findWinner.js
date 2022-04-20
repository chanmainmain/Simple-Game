function findWinner() {
    var board = document.getElementById("board").rows;
    for (var row = 0; row < 3; row++) {
      if (board[row].cells[0].innerHTML == board[row].cells[1].innerHTML &&
        board[row].cells[1].innerHTML == board[row].cells[2].innerHTML &&
        board[row].cells[0].innerHTML != "") 
        return board[row].cells[0].innerHTML;
    }

    for (row = 0; row < 3; row++) {
      if (board[0].cells[row].innerHTML == board[1].cells[row].innerHTML &&
        board[1].cells[row].innerHTML == board[2].cells[row].innerHTML &&
        board[0].cells[row].innerHTML != "")
        return board[0].cells[row].innerHTML;
    }

    if (board[0].cells[0].innerHTML == board[1].cells[1].innerHTML &&
      board[1].cells[1].innerHTML == board[2].cells[2].innerHTML &&
      board[0].cells[0].innerHTML != "")
      return board[0].cells[0].innerHTML;

    if (board[0].cells[2].innerHTML == board[1].cells[1].innerHTML &&
      board[1].cells[1].innerHTML == board[2].cells[0].innerHTML &&
      board[0].cells[2].innerHTML != "")
      return board[0].cells[2].innerHTML;


    return false;
  }



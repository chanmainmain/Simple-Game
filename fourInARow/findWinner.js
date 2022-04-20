function findWinner() {
    var board = document.getElementById("board").rows;
    for (var row = 0; row < 6; row++) {
        for (var column = 0 ; column <=3 ; column++)
        {
            if (board[row].cells[column].innerHTML == board[row].cells[column+1].innerHTML &&
                board[row].cells[column+1].innerHTML == board[row].cells[column+2].innerHTML &&
                board[row].cells[column+2].innerHTML == board[row].cells[column+3].innerHTML &&
                board[row].cells[column].innerHTML != "")
                return board[row].cells[column].innerHTML;
        }
    }


    for( row = 0; row <=2; row++){
        for( column = 0; column<=6; column++){
            if (board[row].cells[column].innerHTML == board[row+1].cells[column].innerHTML &&
                board[row+1].cells[column].innerHTML == board[row+2].cells[column].innerHTML &&
                board[row+2].cells[column].innerHTML == board[row+3].cells[column].innerHTML &&
                board[row+3].cells[column].innerHTML != ""){
                return board[row].cells[column].innerHTML;
            }
        }
    }



    for (row = 0; row <= 2; row++) {
        for (column = 0 ; column <=3 ; column++){
            if (board[row].cells[column].innerHTML == board[row+1].cells[column+1].innerHTML &&
                board[row+1].cells[column+1].innerHTML == board[row+2].cells[column+2].innerHTML &&
                board[row+2].cells[column+2].innerHTML == board[row+3].cells[column+3].innerHTML &&
                board[row+3].cells[column+3].innerHTML != ""){
                return board[row].cells[column].innerHTML;
            }
        }
    }

    for (row = 0; row <= 2; row++) {
        for (column = 6 ; column >=3 ; column--){
            if (board[row].cells[column-1+1].innerHTML == board[row+1].cells[column-2+1].innerHTML &&
                board[row+1].cells[column-2+1].innerHTML == board[row+2].cells[column-3+1].innerHTML &&
                board[row+2].cells[column-3+1].innerHTML == board[row+3].cells[column-4+1].innerHTML &&
                board[row+3].cells[column-4+1].innerHTML != ""){
                return board[row].cells[column].innerHTML;
            }
        }
    }


    return false;
  }



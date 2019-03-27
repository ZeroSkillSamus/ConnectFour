
class Board{
    constructor(){
        this.board = [
            [0, 0, 0, 0, 0, 0 ,0],
            [0, 0, 0, 0, 0, 0 ,0],
            [0, 0, 0, 0, 0, 0 ,0],
            [0, 0, 0, 0, 0, 0 ,0],
            [0, 0, 0, 0, 0, 0 ,0],
            [0, 0, 0, 0, 0, 0 ,0],
            [1, '', '','','','','']
        ];
        console.log("WELCOME TO CONNECT 4 IN NODE!!");
        this.displayBoard();
      
    }
    
    //Used to display the connect 4 board
    displayBoard(){
        for(let i=0;i<this.board.length-1;i++){
            for(let j=0;j<this.board[i].length;j++){
                var str = this.board[i].join(' ');
            }
            console.log(str);
        }
    }

    resetBoard(){
        for(let i=0;i<this.board.length-1;i++){
            for(let j=0;j<this.board[i].length;j++){
                this.board[i][j] = 0;
            }
        }
    }
    
}
module.exports = Board;
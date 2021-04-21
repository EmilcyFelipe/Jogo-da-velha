let board = ['','','','','','','','',''];
let playerTime = 0;
let symbols = ['o','x'];
let gameOver=false;

function handleMove(position){
    win();
    if(gameOver){
        return;
    }
     
     
     if((board[position])==""){
        board[position]= symbols[playerTime];
        if(playerTime==0){
            playerTime=1;
        }else{
            playerTime=0;
        }
     }

    
}
function win(){
    let setWinnerPosition = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(i=0;i<setWinnerPosition.length;i++){
        if(board[setWinnerPosition[i][0]]!=""||board[setWinnerPosition[i][1]]!=""||board[setWinnerPosition[i][2]]!=""){
            if(board[setWinnerPosition[i][0]]==board[setWinnerPosition[i][1]]){
                if(board[setWinnerPosition[i][1]]==board[setWinnerPosition[i][2]]){
                gameOver=true;
                if(gameOver==true){
                    document.querySelector('.winner').classList.add("show-winner");
                }
                }
            }
        }
        
    }
}
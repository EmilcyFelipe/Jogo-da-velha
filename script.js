document.addEventListener('DOMContentLoaded',()=>{

    let piece = document.querySelectorAll('.piece');
    
    piece.forEach((piece) =>{
        piece.addEventListener('click', handleClick);
    })

});

function handleClick(event){
    handleMove(event.target.id);
    updateBoard();
}

function updateBoard(){
    let pieces = document.querySelectorAll('.piece');
    
    if(board[event.target.id]=="o"){
        console.log(event.target.id);
        pieces[event.target.id].classList.add("show-face-shield");
    }else{
        pieces[event.target.id].classList.add("show-face-sword");
}
    winner();
}

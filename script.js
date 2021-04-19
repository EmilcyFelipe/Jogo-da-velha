document.addEventListener('DOMContentLoaded',()=>{


let piece = document.querySelectorAll('.piece');
    piece.forEach((piece) => {
    piece.addEventListener('click',handleClick);
});

});
 let count=0;
function handleClick(event){
    count++;
    if(count%2==0){
        event.target.classList.add("show-face-shield");
    }else{
        event.target.classList.add("show-face-sword");

}}



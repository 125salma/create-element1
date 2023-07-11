function setPlayerStyle(player){
      // console.log(player);
      player.style.border='1px solid red';
      player.style.borderRadius='15px';
      player.style.margin='10px';
      player.style.padding='10px';
}
const players = document.getElementsByClassName('player');
for(const player of players){
    setPlayerStyle(player);
    // player.addEventListener('click',function(){
    //     player.style.backgroundColor='yellow';
    // })
}
function addPlayer(){
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');//class create
    player.innerHTML = `
    <h4 class="player-name">New Player</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laudantium ad deserunt eum reprehenderit delectus distinctio aspernatur officia praesentium non, eius itaque enim nesciunt, accusantium recusandae minima sapiente nostrum omnis?</p>

    `;
    setPlayerStyle(player);
    // player.addEventListener('click',function(){
    //     player.style.backgroundColor='yellow';
    // })
    playersContainer.appendChild(player);
    console.log(player)

}
//event  bubbole use
document.getElementById('players').addEventListener('click',function(event){
    // console.log(event.target.tagName.toLowerCase());
    if(event.target.tagName.toLowerCase()=='div'){
        event.target.style.backgroundColor = 'yellow';
    }
    else{
        // console.log(event.target.parentNode);
        event.target.parentNode.style.backgroundColor = 'yellow';
    }

})
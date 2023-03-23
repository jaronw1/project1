
document.querySelector("board", function(){

})



function randomArraySelector(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    return arr[randomIndex]
}







let maxBoard = 1;

function createBoard() {

    for(let a=0; a<8; a++) {
        var row = document.createElement("div");
        document.getElementById("board").appendChild(row);
        row.className = 'row';
        for(let b=0; b<8; b++) {
            var column= document.createElement("div");
            column.classList.add(maxBoard);
            column.innerHTML = maxBoard++
            row.appendChild(column)
            column.addEventListener("click", function(e){
                console.log(e.target)
                if (["3", "33", "21", "50"].includes(e.target.className)){
                    e.target.className = "bomb"
                    //document.getElementById('gameover')
                    gameOverScreen.style.display = 'block'
                } else {
                e.target.className = 'tile-clicked'
                console.log(win.length)
                if (win.length > 59){
                    document.getElementById("win").addEventListener

                }
                } 
            })
        }
    }

}
createBoard()

const startScreen = document.getElementById('start');

const gameOverScreen = document.getElementById('gameover');

function restartGame(){
    document.getElementById("gameover").addEventListener("click", function(z){
        z.target.style.display = "none"
        gameOverScreen.style.display = "none"
        get
    

        
    
    })
    }
 
        // for (var i = 0; i < reset.length; i++) {
        //     reset[i].classList.remove("bomb", "tile-clicked")
        // }

const win = document.getElementsByClassName('tile-clicked')




function startGame(){
    document.getElementById("start").addEventListener("click", function(e){
    e.target.style.display = "none"
    startScreen.style.display = "none"
    })


}



// function GameLose( {
//     document.getElementsByClassName("bomb")
//     if (getElementById("board"))

// })








// let element = document.getElementById("div");
// element.addEventListener("click", function(){
//     style.backgroundColor = "red";
// })



// let x = document.getElementById("div").querySelector("board");

// x[0].style.backgroundColor="#";


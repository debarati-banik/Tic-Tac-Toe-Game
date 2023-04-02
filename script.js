console.log("Welcome to Tic Tac Toe")
let audioTurn = new Audio("ting.mp3")

let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;

// function tochange the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X"                  //if X then change it into 0 in next turn
}

//function to check for a win 
const checkWin = () => {
  let boxtext = document.getElementsByClassName('boxtext');
  let wins = [
    [0, 1, 2,0,5,0],
    [3, 4, 5,0,15,0],
    [6, 7, 8,0,25,0],
    [0, 3, 6,-10,15,90],
    [1, 4, 7,0,15,90],
    [2, 5, 8 ,10,15,90],
    [0, 4, 8,0,15,45],
    [2, 4, 6,0,15,135],
  ]
  wins.forEach(e => {
    if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")) {
      document.querySelector('.info').innerText = boxtext[e[0]].innerText + "    Won!"
      isgameover = true
      document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "300px"
      gameover.play()
      document.querySelector('.line').style.width="30vw"
      document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw)rotate(${e[5]}deg)`
      

    }
  })


}


//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
  let boxtext = element.querySelector('.boxtext');        //selecting the elements writeen in each box
  element.addEventListener('click', () => {              //adding eventlistener for each 
    if (boxtext.innerText === '') {                     //changing the innertext using turn function turn= changeTurn
      boxtext.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!isgameover) {
        document.getElementsByClassName("info")[0].innerText = "Turn for  " + turn;
      }
    }
  })
})

//Add on click listener to reset button
reset.addEventListener('click',()=>{
  let boxtexts = document.querySelectorAll('.boxtext');
  Array.from(boxtexts).forEach(element=>{
    element.innerText= ""
  });
  turn= "X";
  isgameover= false
  document.querySelector(".line").style.width = "0vw"
  document.getElementsByClassName("info")[0].innerText = "Turn for  "+ turn;
  document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})

document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)
  function appendLi(ul, li){
    ul.appendChild(li)
  }
  
  function movesOutput(event){
    let movesContainer = document.getElementById("moves-container")
    let li = document.createElement("li")
    if (event.key === 'ArrowLeft'){
      move("left")
      li.innerText = "left"
      appendLi(movesContainer,li)
    } else if (event.key === 'ArrowRight'){
      move("right")
      li.innerText = "right"
      appendLi(movesContainer,li)
    } else if (event.key === 'ArrowDown'){
      move("down")
      li.innerText = "up"
      appendLi(movesContainer,li)
    } else if (event.key === 'ArrowUp'){
      move("up")
      li.innerText = "down"
      appendLi(movesContainer,li)
    }
    else{
    }
  }

  document.addEventListener("keydown", movesOutput)

  // ADD CODE HERE!
})

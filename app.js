document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  const clearButton = document.querySelector('.clear')
  const scoreBoard = document.querySelector('.score')
  const missBoard = document.querySelector('.misses')

  clearButton.addEventListener('click', function(e) {
    clickClear(clearButton)
  })

  
  let width = 4
  let squares = []
  
  //create board
  function createBoard() {
    const cardsArray = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H"]
    const shuffledArray = cardsArray.sort(() => Math.random() -0.5)
    for(let i = 0; i < width*width; i++) {
      const square = document.createElement('div')
      square.setAttribute('id', i)
      square.setAttribute( 'cardLetter', shuffledArray[i])
      grid.appendChild(square)
      squares.push(square)
      
      //click square
      square.addEventListener('click', function(e) {
        click(square)
      })
    }
  }
  createBoard()
  
  let firstGuess = []
  let secondGuess = []
  let score = 0
  let misses = 0
  let isClear = 'true'
  
  function click(square) {
    if (isClear === 'true'){
      let clickLetter = square.getAttribute('cardLetter')
      let clickId = square.getAttribute('id')
      square.innerHTML = clickLetter

      if (firstGuess.length === 0) {
        firstGuess = {
          cardLetter : clickLetter,
          id : clickId,
          squareSave : square
        }
      } else {
        secondGuess = {
          cardLetter : clickLetter, 
          id : clickId,
          squareSave : square
        }
        if (firstGuess.cardLetter === secondGuess.cardLetter && firstGuess.id !== secondGuess.id) {
          score ++
          scoreBoard.innerHTML = `Score: ${score}`
          firstGuess = []
          secondGuess = []
        } else {
          isClear = 'false'
          misses ++
          missBoard.innerHTML = `Misses: ${misses}`
        }
      }
    } else {
      alert('Clear Wrong Guess')
    }
  }
  
  function clickClear(clearButton) {
    if (isClear === 'false'){
      isClear = 'true'
      secondGuess.squareSave.innerHTML = ''
      firstGuess.squareSave.innerHTML = ''
      firstGuess = []
      secondGuess = []
    }
  }
  
})
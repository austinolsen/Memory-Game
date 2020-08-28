document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
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

  function click(square) {
    let clickLetter = square.getAttribute('cardLetter')
    let clickId = square.getAttribute('id')
    square.innerHTML = clickLetter

    if (firstGuess.length === 0) {
      firstGuess = [{cardLetter : clickLetter}, {id : clickId}]
      console.log(firstGuess)
    } else {
      secondGuess = [{cardLetter : clickLetter}, {id : clickId}]
      console.log(secondGuess)
    }
  }


})
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
      square.innerHTML = shuffledArray[i]
      grid.appendChild(square)
      squares.push(square)
    }
  }
  createBoard()


})
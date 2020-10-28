import React from 'react'
import classNames from 'classnames'
import './App.scss';
// [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]

const newArrays = new Array(4).fill(new Array(4))
// console.log(newArrays)

function classNameItem(item){
  return classNames("gameBlock__item", {
    "gameBlock__item--2": item === 2,
    "gameBlock__item--4": item === 4,
    "gameBlock__item--8": item === 8,
    "gameBlock__item--16": item === 16,
    "gameBlock__item--32": item === 32,
    "gameBlock__item--64": item === 64,
    "gameBlock__item--128": item === 128,
    "gameBlock__item--256": item === 256,
    "gameBlock__item--512": item === 512,
    "gameBlock__item--1024": item === 1024,
    "gameBlock__item--2048": item === 2048,
  })
}

function randomNumber (){
  return Math.floor(Math.random() * 4)
}

function generateNewField () {
  let arrays = [...newArrays]
  let arrayRandom = new Array(4)
  let arrayRandom2 = new Array(4)
  arrayRandom[randomNumber()] = 2
  arrayRandom2[randomNumber()] = 2
  arrays[randomNumber()] = arrayRandom
  arrays[randomNumber()] = arrayRandom2
  
  return arrays
}

class App extends React.Component {
  state = {
    arrays: newArrays,
    score: 0,
    bestScore: 0,
  }

  refreshArray(newArr) {
    this.setState({
      arrays: newArr,
    })
  }

  generateNumbers = () => {
    let x = randomNumber()
    let y = randomNumber()
    let z = this.state.arrays

    if (!z[x][y]){
      z[x][y] = 2
      this.refreshArray(z)
    } else this.generateNumbers()
  }
  
  componentDidMount() {
    document.addEventListener('keydown', this.swipeLeft)
    document.addEventListener('keydown', this.swipeRight)
    document.addEventListener('keydown', this.swipeUp)
    document.addEventListener('keydown', this.swipeDown)
  }
  
  //Game Panel

  newGame(){
    this.setState(({score, bestScore}) => ({
      arrays: generateNewField(),
      bestScore: score > bestScore ? score : bestScore,
      score: 0,
    }))

    
  }

  //SwipesFunctions

  horizontallySwipe(swipe){
    let stateArray = [...this.state.arrays]
    let exitArray = []
  
    for (let i = 0; i < stateArray.length; i++){
     let filterElements = stateArray[i].filter(elem => elem);
     let additionDoneElements = []
     for (let m = 0; m < filterElements.length; m++){
        if (filterElements[m] === filterElements[m + 1]){
          additionDoneElements.push(filterElements[m] * 2)
          this.setState(state => {
            state.score += filterElements[m]
          })
          m++
        } else {
          additionDoneElements.push(filterElements[m])
        }
     }
     let emptyElements = new Array(4 - additionDoneElements.length);
  
     if (swipe === 'left'){
      for (let n = 0; n < emptyElements.length; n++){
        additionDoneElements.push(emptyElements[n])
       }
       exitArray.push(additionDoneElements)
     } else {
      for (let n = 0; n < additionDoneElements.length; n++){
        emptyElements.push(additionDoneElements[n])
       }
       exitArray.push(emptyElements)
      }
    }
  
    this.refreshArray(exitArray)
  }

  VerticalSwipe(swipe) {
    let stateArray = [...this.state.arrays]
    let exitArrays = []
    let rotateArray = [[],[],[],[]]
  
    for (let i = 0; i < stateArray.length; i++) {
      rotateArray[0].push(stateArray[i][0])
      rotateArray[1].push(stateArray[i][1])
      rotateArray[2].push(stateArray[i][2])
      rotateArray[3].push(stateArray[i][3])
    }
  
    let rotateBackArrays = []
      for (let j = 0; j < rotateArray.length; j++){
        let filters = rotateArray[j].filter(number => number)
        let filtered = []

        for (let h = 0; h < filters.length; h++){
          if (filters[h] === filters[h+1]){
            filtered.push(filters[h] * 2)
            this.setState(state => {
            state.score += filters[h]
            })
            h++
          } else filtered.push(filters[h])
        }

        let emptyArray = new Array(4 - filtered.length)
        if (swipe === 'up') {
          for (let i = 0; i < emptyArray.length; i++){
          filtered.push(emptyArray[i])
          }

          rotateBackArrays.push(filtered)
        } else {
            for (let i = 0; i < filtered.length; i++){
              emptyArray.push(filtered[i])
            }

            rotateBackArrays.push(emptyArray)
          }
      }
  
      for (let i = 0; i < rotateBackArrays.length; i++) {
        let r = []
        for (let h = 0; h < rotateBackArrays.length; h++) {
          r.push(rotateBackArrays[h][i])
        }

        exitArrays.push(r)
      }

      this.refreshArray(exitArrays)
  }

  //Swipe Left Components

  swipeLeft = (event) => {
    if (event.code === 'ArrowLeft'){
      this.horizontallySwipe('left')
      setTimeout(() => {
        this.generateNumbers()
      }, 300)
      
    }
  }

  //Swipe Right Components

  swipeRight = (event) => {
    if (event.code === 'ArrowRight'){
      this.horizontallySwipe('right')
      setTimeout(() => {
        this.generateNumbers()
      }, 300)
    }
  }

  //Swipe Up Components

  swipeUp = (event) => {
    if (event.code === 'ArrowUp'){
      this.VerticalSwipe('up')
      setTimeout(() => {
        this.generateNumbers()
      }, 300)
    }
  }

  //Swipe Down Components

  swipeDown = (event) => {
    if (event.code === 'ArrowDown'){
      this.VerticalSwipe('down')
      setTimeout(() => {
        this.generateNumbers()
      }, 300)
    }
  }

  //Rendering...

  render() {
    const { arrays, score, bestScore } = this.state
    return (
      
      <div className="game">
        <div className="gamePanel">
          <div className="gamePanel__scores">
            <h1>2048</h1>
            <h2>Score:{score}</h2>
            <h3>Best Score:{bestScore}</h3>
          </div>
        <button
          type="button"
          onClick={() => this.newGame()}
          name="btn"
          id="newGame"
        >
          NEW GAME
        </button>
        </div>
        <div className="gameBlock">
          <div className={classNameItem(arrays[0][0])}>{arrays[0][0]}</div>
          <div className={classNameItem(arrays[0][1])}>{arrays[0][1]}</div>
          <div className={classNameItem(arrays[0][2])}>{arrays[0][2]}</div>
          <div className={classNameItem(arrays[0][3])}>{arrays[0][3]}</div>

          <div className={classNameItem(arrays[1][0])}>{arrays[1][0]}</div>
          <div className={classNameItem(arrays[1][1])}>{arrays[1][1]}</div>
          <div className={classNameItem(arrays[1][2])}>{arrays[1][2]}</div>
          <div className={classNameItem(arrays[1][3])}>{arrays[1][3]}</div>

          <div className={classNameItem(arrays[2][0])}>{arrays[2][0]}</div>
          <div className={classNameItem(arrays[2][1])}>{arrays[2][1]}</div>
          <div className={classNameItem(arrays[2][2])}>{arrays[2][2]}</div>
          <div className={classNameItem(arrays[2][3])}>{arrays[2][3]}</div>

          <div className={classNameItem(arrays[3][0])}>{arrays[3][0]}</div>
          <div className={classNameItem(arrays[3][1])}>{arrays[3][1]}</div>
          <div className={classNameItem(arrays[3][2])}>{arrays[3][2]}</div>
          <div className={classNameItem(arrays[3][3])}>{arrays[3][3]}</div>
        </div>
      </div>
    )
  }
}

export default App;

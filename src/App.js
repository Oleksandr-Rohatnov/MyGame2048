
import React from 'react'
import './App.scss';

const newArrays = new Array(4).fill(new Array(4))

function randomNumber (){
  return Math.floor(Math.random() * 4)
}

class App extends React.Component {
  state = {
    arrays: newArrays,
    score: 0,
    bestScore: 0,
  }

  refreshArray(newArr) {
    this.setState(({
      arrays: newArr,
    }))
    return newArr
  }

  generateNumbers() {
    let x = randomNumber()
    let y = randomNumber()
    let z = this.state.arrays

    if (!z[x][y]){
      z[x][y] = 2
      this.refreshArray(z)
    } else this.generateNumbers()
  }
  
  componentDidMount() {
    document.addEventListener('keypress', this.swipeLeft)
    document.addEventListener('keypress', this.swipeRight)
    document.addEventListener('keypress', this.swipeUp)
    document.addEventListener('keypress', this.swipeDown)
  }
  
  //Game Panel

  newGame(){
    this.setState(state => ({
      bestScore: state.score > state.bestScore ? state.score : state.bestScore,
      score: 0,
    }))

    this.refreshArray(newArrays)
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
    if (event.code === 'KeyA'){
      this.horizontallySwipe('left')
      this.generateNumbers()
    }
  }

  //Swipe Right Components

  swipeRight = (event) => {
    if (event.code === 'KeyD'){
      this.horizontallySwipe('right')
      this.generateNumbers()
    }
  }
  
  //Swipe Up Components

  swipeUp = (event) => {

    if (event.code === 'KeyW'){
      this.VerticalSwipe('up')
      this.generateNumbers()
    }
  }

  //Swipe Down Components

  swipeDown = (event) => {

    if (event.code === 'KeyS'){
      this.VerticalSwipe('down')
      this.generateNumbers()
    }
  }

  //Rendering...

  render() {
    const { arrays, score, bestScore } = this.state
    return (
      <>
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
      >
        New game
      </button>
      </div>
      <div className="gameBlock">
        <div className="gameBlock__item">{arrays[0][0]}</div>
        <div className="gameBlock__item">{arrays[0][1]}</div>
        <div className="gameBlock__item">{arrays[0][2]}</div>
        <div className="gameBlock__item">{arrays[0][3]}</div>

        <div className="gameBlock__item">{arrays[1][0]}</div>
        <div className="gameBlock__item">{arrays[1][1]}</div>
        <div className="gameBlock__item">{arrays[1][2]}</div>
        <div className="gameBlock__item">{arrays[1][3]}</div>

        <div className="gameBlock__item">{arrays[2][0]}</div>
        <div className="gameBlock__item">{arrays[2][1]}</div>
        <div className="gameBlock__item">{arrays[2][2]}</div>
        <div className="gameBlock__item">{arrays[2][3]}</div>

        <div className="gameBlock__item">{arrays[3][0]}</div>
        <div className="gameBlock__item">{arrays[3][1]}</div>
        <div className="gameBlock__item">{arrays[3][2]}</div>
        <div className="gameBlock__item">{arrays[3][3]}</div>
      </div>
      </>
    )
  }
}

export default App;

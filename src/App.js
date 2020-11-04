import React from 'react'
import './App.scss';
import { GamePanel } from './Components/GamePanel/GamePanel';
import { GameField } from './Components/GameField/GameField';
import { arrayCheck, winCheck, generateNewField, generateNumbers } from './Components/ServiceComponents/ServiceComponents';

class App extends React.Component {
  state = {
    arrays: generateNewField(),
    score: 0,
    bestScore: 0,
    gameStatus: true,
    winStatus: false,
  }

  componentDidMount() {
    document.addEventListener('keydown', this.swipeLeft)
    document.addEventListener('keydown', this.swipeRight)
    document.addEventListener('keydown', this.swipeUp)
    document.addEventListener('keydown', this.swipeDown)
  }

  // NewGame and refresh arrays

  refreshArray = (newArr) => {
    this.setState({
      arrays: newArr,
    })
  }
  
  newGame = () => {
    this.setState(({score, bestScore}) => ({
      arrays: generateNewField(),
      bestScore: score > bestScore ? score : bestScore,
      score: 0,
      gameStatus: true,
      winStatus: false,
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

    if (winCheck(exitArray)) {
      this.setState({
        winStatus: true
      })
    }

    if (!arrayCheck(exitArray, stateArray)) {
      this.refreshArray(exitArray)
      setTimeout(() => {
        generateNumbers(this.state.arrays, this.refreshArray)
      },300)
    }
      
    return arrayCheck(exitArray)
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
        } else filtered.push(filters[h]);
      }

      let emptyArray = new Array(4 - filtered.length);
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
      let rotateSomeArray = []
      for (let h = 0; h < rotateBackArrays.length; h++) {
        rotateSomeArray.push(rotateBackArrays[h][i])
      }

      exitArrays.push(rotateSomeArray)
    }

    if (winCheck(exitArrays)) {
      this.setState({
        winStatus: true
      })
    }

    if (!arrayCheck(exitArrays, stateArray)) {
      this.refreshArray(exitArrays)
      setTimeout(() => {
        generateNumbers(this.state.arrays, this.refreshArray)
      },300)
    }

    return arrayCheck(exitArrays)
  }

  //Left Listening

  swipeLeft = (event) => {
    if (event.code === 'ArrowLeft'){
      this.horizontallySwipe('left')

      this.setState({gameStatus: this.horizontallySwipe('left')})
    }
  }

  //Right Listening

  swipeRight = (event) => {
    if (event.code === 'ArrowRight'){
      this.horizontallySwipe('right')
      this.setState({gameStatus: this.horizontallySwipe('right')})
    }
  }

  //Up Listening

  swipeUp = (event) => {
    if (event.code === 'ArrowUp'){
      this.VerticalSwipe('up')
      this.setState({gameStatus: this.VerticalSwipe('up')})
    }
  }

  //Down Listening

  swipeDown = (event) => {
    if (event.code === 'ArrowDown'){
      this.VerticalSwipe('down')
      this.setState({gameStatus: this.VerticalSwipe('down')})
    }
  }

  //Rendering...

  render() {
    const { arrays, score, bestScore, gameStatus, winStatus } = this.state
    return (
      <div className="game">
        <GamePanel score={score} bestScore={bestScore} newGameFunction={this.newGame}/>
        <GameField arrays={arrays} gameStatus={gameStatus} winStatus={winStatus}/>
      </div>
    )
  }
}

export default App;

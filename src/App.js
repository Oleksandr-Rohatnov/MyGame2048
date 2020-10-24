
import React from 'react'
import './App.scss';

class App extends React.Component {
  state = {
    arrays: [[0,0,0,0],
             [0,0,0,0],
             [0,0,0,0],
             [0,0,0,0],]
  }

  refreshArray(newArr) {
    this.setState(state => ({
      ...state,
      arrays: newArr,
    }))
  }

  generateNumbers() {
    let x = Math.floor(Math.random() * 4)
    let y = Math.floor(Math.random() * 4)
    let z = [...this.state.arrays]
    if (z.every(c => c.every(c => c !== 0))){
     alert('Game Over')
     this.refreshArray([[0,0,0,0],
                        [0,0,0,0],
                        [0,0,0,0],
                        [0,0,0,0],])
    }

    if (z[x][y] === 0){
      z[x][y] = Math.random() > 0.5 ? 4 : 2
      this.refreshArray(z)
    } else this.generateNumbers()
  }
  
  componentDidMount() {
    document.addEventListener('keypress', this.swipeLeft)
  }

  //Game Panel

  //Swipe Left Components

  swipeLeft = (event) => {

    if (event.code === 'KeyA'){
      this.left()
      this.generateNumbers()
      this.generateNumbers()
    }
  }

  left() {
    let stateArray = [...this.state.arrays]
    let exitArray = []

    for (let i = 0; i < stateArray.length; i++){
     let filterElements = stateArray[i].filter(elem => elem !== 0);
     let additionDoneElements = []
     for (let m = 0; m < filterElements.length; m++){
        if (filterElements[m] === filterElements[m + 1]){
          additionDoneElements.push(filterElements[m] * 2)
          m++
        } else {
          additionDoneElements.push(filterElements[m])
        }
     }
     let emptyElements = new Array(4 - additionDoneElements.length).fill(0);

     for (let n = 0; n < emptyElements.length; n++){
      additionDoneElements.push(emptyElements[n])
     }
     exitArray.push(additionDoneElements)
 
    }

    this.refreshArray(exitArray)
  }

  //Swipe Right Components

  //Swipe Down Components

  //Swipe Up Components

  
  
  

  //Rendering...

  render() {
    const { arrays } = this.state
    return (
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
    )
  }
}

export default App;

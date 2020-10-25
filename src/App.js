
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
    // if (z.every(c => c.every(c => c !== 0))){
    //  alert('Game Over')
    //  this.refreshArray([[0,0,0,0],
    //                     [0,0,0,0],
    //                     [0,0,0,0],
    //                     [0,0,0,0],])
    // }

    if (z[x][y] === 0){
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

  //Swipe Left Components

  swipeLeft = (event) => {

    if (event.code === 'KeyA'){
      this.left()
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

  swipeRight = (event) => {

    if (event.code === 'KeyD'){
      this.right()
      this.generateNumbers()
    }
  }

  right() {
    let stateArray = [...this.state.arrays];
    let exitArray = [];

    for (let i = 0; i < stateArray.length; i++){
     let filterElements = stateArray[i].filter(elem => elem !== 0);
     let additionDoneElements = [];
     for (let m = 0; m < filterElements.length; m++){
        if (filterElements[m] === filterElements[m + 1]){
          additionDoneElements.push(filterElements[m] * 2)
          m++
        } else {
          additionDoneElements.push(filterElements[m])
        }
     }
     let emptyElements = new Array(4 - additionDoneElements.length).fill(0);

     for (let n = 0; n < additionDoneElements.length; n++){
      emptyElements.push(additionDoneElements[n])
     }
     exitArray.push(emptyElements)
 
    }

    this.refreshArray(exitArray)
  }

  //Swipe Up Components

  swipeUp = (event) => {

    if (event.code === 'KeyW'){
      this.up()
      this.generateNumbers()
    }
  }

  up() {
    let stateArray = [...this.state.arrays]
    let x = []
    let one = [];
    let two = [];
    let tree = [];
    let four = [];

    for (let i = 0; i < stateArray.length; i++) {
      one.push(stateArray[i][0])
      two.push(stateArray[i][1])
      tree.push(stateArray[i][2])
      four.push(stateArray[i][3])
    }

    

    let y = [one, two, tree, four]
    let res = []
     for (let j = 0; j < y.length; j++){
       let filters = y[j].filter(a => a !== 0)
       let filtered = []
       for (let h = 0; h < filters.length; h++){
         if (filters[h] === filters[h+1]){
           filtered.push(filters[h] * 2)
           h++
         } else filtered.push(filters[h])
       }
       let z = new Array(4 - filtered.length).fill(0)
  
       for (let y = 0; y < z.length; y++){
        filtered.push(z[y])
       }
       
       res.push(filtered)
     }

     for (let i = 0; i < res.length; i++) {
       let r = []
      for (let h = 0; h < res.length; h++) {
        r.push(res[h][i])
      }
      x.push(r)
     }
    
     this.refreshArray(x)
     

    
  }

  //Swipe Down Components

  swipeDown = (event) => {

    if (event.code === 'KeyS'){
      this.down()
      this.generateNumbers()
    }
  }

  down() {
    let stateArray = [...this.state.arrays]
    let x = []
    let one = [];
    let two = [];
    let tree = [];
    let four = [];

    for (let i = 0; i < stateArray.length; i++) {
      one.push(stateArray[i][0])
      two.push(stateArray[i][1])
      tree.push(stateArray[i][2])
      four.push(stateArray[i][3])
    }

    

    let y = [one, two, tree, four]
    let res = []
     for (let j = 0; j < y.length; j++){
       let filters = y[j].filter(a => a !== 0)
       let filtered = []
       for (let h = 0; h < filters.length; h++){
         if (filters[h] === filters[h+1]){
           filtered.push(filters[h] * 2)
           h++
         } else filtered.push(filters[h])
       }
       let z = new Array(4 - filtered.length).fill(0)
  
       for (let y = 0; y < filtered.length; y++){
        z.push(filtered[y])
       }
       
       res.push(z)
     }

     for (let i = 0; i < res.length; i++) {
       let r = []
      for (let h = 0; h < res.length; h++) {
        r.push(res[h][i])
      }
      x.push(r)
     }
    
     this.refreshArray(x)
     

    
  }
  
  
  

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

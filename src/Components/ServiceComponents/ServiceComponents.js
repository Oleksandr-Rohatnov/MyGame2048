import classNames from 'classnames'

export function classNameItem(item) {
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


///CHECKING...

export function arrayCheck(arr, arr2) {
  let count = 0;
  if (!arr2) {
    for (let i = 0; i < arr.length; i++){
      for (let j = 0; j < arr.length; j++){
        if (arr[i][j]) {
          count++
        }
      }
    }
    return count === 16 ? false : true;
  } else {
    let result = true
    for (let i = 0; i < arr.length; i++){
      for (let j = 0; j < arr.length; j++){
        if (arr[i][j] !== arr2[i][j]) {
          result = false;
        }
      }
    }
    return result;
  }
}

export function winCheck(arr) {
  return arr.some(x => x.some(y => y === 2048))
}

///GENERATIONS...

export function generateNewField () {
  let arrays = new Array(4).fill(new Array(4))
  let arrayRandom = new Array(4)
  let arrayRandom2 = new Array(4)
  arrayRandom[randomNumber()] = 2
  arrayRandom2[randomNumber()] = 2
  arrays[randomNumber()] = arrayRandom
  arrays[randomNumber()] = arrayRandom2
  return arrays
}

export function generateNumbers(arr, refresh) {
  let x = randomNumber();
  let y = randomNumber();
  let z = arr;

  if (!z[x][y]){
    z[x][y] = 2
    refresh(z)
  } else generateNumbers(z, refresh)
}

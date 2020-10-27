// VerticalSwipe(swipe){
//   let stateArray = [...this.state.arrays]
//   let exitArrays = []
//   let one = [];
//   let two = [];
//   let tree = [];
//   let four = [];

//   for (let i = 0; i < stateArray.length; i++) {
//     one.push(stateArray[i][0])
//     two.push(stateArray[i][1])
//     tree.push(stateArray[i][2])
//     four.push(stateArray[i][3])
//   }

  

//   let y = [one, two, tree, four]
//   let rotateArrays = []
//    for (let j = 0; j < y.length; j++){
//      let filters = y[j].filter(a => a)
//      let filtered = []
//      for (let h = 0; h < filters.length; h++){
//        if (filters[h] === filters[h+1]){
//          filtered.push(filters[h] * 2)
//          this.setState(state => {
//           state.score += filters[h]
//         })
//          h++
//        } else filtered.push(filters[h])
//      }
//      let emptyArray = new Array(4 - filtered.length)
//      if (swipe === 'up') {
//       for (let i = 0; i < emptyArray.length; i++){
//         filtered.push(emptyArray[i])
//        }
       
//        rotateArrays.push(filtered)
//      } else {
//       for (let i = 0; i < filtered.length; i++){
//         emptyArray.push(filtered[i])
//        }
       
//        rotateArrays.push(emptyArray)
//      }
     
//    }

//    for (let i = 0; i < rotateArrays.length; i++) {
//      let r = []
//     for (let h = 0; h < rotateArrays.length; h++) {
//       r.push(rotateArrays[h][i])
//     }
//     exitArrays.push(r)
//    }
  
//    this.refreshArray(exitArrays)
  
// }
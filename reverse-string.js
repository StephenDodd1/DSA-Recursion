reverseString = str => {
  while( str.length / 2 >= 1) {
    let arr = str.split()
    let j = arr.splice(Math.floor(str.length/2)-1, 0)
    let k = arr.splice(Math.ceil(str.length/2, 0))
    let newArr = []
    newArr.push(j)
    newArr.unshift(k)
    let backToStr = arr.toString()
    return reverseString(backToStr)
  }
}
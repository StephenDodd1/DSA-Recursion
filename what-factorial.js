whatFactorial = num => {
  if( num === 1 ){
    return 1
  }
  else if( num > 1 ) {
    return num * whatFactorial(--num)
  }
}
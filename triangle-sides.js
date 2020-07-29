let numPoints = triangleSides = num => {
  if( num === 1 ) {
    return 1;
  }
  else if( num <1 ) {
    return 'please input a number greater than 0'
  }
  else { 
    return num + triangleSides( num - 1 )
  }
}
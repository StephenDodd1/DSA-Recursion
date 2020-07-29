powerCalc = (base, power) => {
  if ( power === 1 ){
    return 1
  }
  else if ( power < 1 ) {
    return "please input a number greter than 0"
  }
  else { 
    return base * powerCalc(base, power-1)
  }
}
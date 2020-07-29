powerCalc = (base, power) => {
  let solution
  while ( power > 1 ) {
    solution *= base;
    power--
  }
  return solution
}
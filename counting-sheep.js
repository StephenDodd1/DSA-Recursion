countingSheep = num => {
  console.log(num)
  while (num > 0) {
    num--;
    countingSheep(num)
  }
  return num
}


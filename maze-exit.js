maze = [
  [" ", " ", " "],
  [" ", "*", " "],
  [" ", " ", "e"],
];

mazeExit = (maze, row, column) => {
  if (maze[row][column] === "e") {
    return "Salvation!";
  } else if (maze[row + 1] === " ") {
    console.log("On the right track at position", row, column);
    return mazeExit(maze, row + 1, column);
  } else if (maze[row + 1] !== ' ') {
    console.log("Still on the right track");
    return mazeExit(maze, row, column + 1);
  } else if (maze[row][column + 1]) {
    console.log('Keep going')
    return mazeExit(maze, row, column + 1);
  }
};

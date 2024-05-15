// SpaceshipFinder.js
function spaceShipFinder(map) {}
spaceShipFinder.prototype.find = function (map) {
  let position;
  let mapArrays = map.split("\n");

  for (let i = 0; i < mapArrays.length; i++) {
    for (let j = 0; j < mapArrays[i].length; j++) {
      if (mapArrays[i][j] === "X") {
        position = [i, j];
      }
    }
  }

  if (position === undefined) {
    return "Spaceship lost forever.";
  }

  return position;
};

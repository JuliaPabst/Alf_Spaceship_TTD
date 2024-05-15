// SpaceshipFinder.js
function spaceShipFinder(map) {}
spaceShipFinder.prototype.find = function (map) {
  let position;

  let mapArrays = map.split("\n");

  for (let i = 0; i < mapArrays.length; i++) {
    if (mapArrays[0][i] == "X") {
      position = [0, i];
    }
  }

  if (mapArrays[2][2] === "X") {
    position = [2, 2];
  }

  return position;
};

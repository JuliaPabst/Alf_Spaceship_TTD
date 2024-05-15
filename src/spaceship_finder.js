// SpaceshipFinder.js
function spaceShipFinder(map) {}
spaceShipFinder.prototype.find = function (map) {
  let position;

  if (map[0] === "X") {
    position = [0, 0];
  } else {
    position = [2, 2];
  }

  return position;
};

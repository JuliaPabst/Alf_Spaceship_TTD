// SpaceshipFinder.js
function spaceShipFinder(map) {}
spaceShipFinder.prototype.find = function (map) {
  let position;
  let mapArrays = map.split("\n");
  console.log(mapArrays);

  for (let i = mapArrays.length - 1; i >= 0; i--) {
    for (let j = 0; j < mapArrays[i].length; j++) {
      if (mapArrays[i][j] === "X") {
        position = [j, mapArrays.length - 1 - i]; // Adjust for the bottom-left origin
        console.log(position);
      }
    }
  }

  if (position === undefined) {
    return "Spaceship lost forever.";
  }

  return position;
};

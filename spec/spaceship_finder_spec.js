describe("Spaceship finder", function () {
  beforeEach(function () {
    spaceship = new spaceShipFinder();
  });

  it("should return [0, 2] if it is on the first field", function () {
    expect(spaceship.find("X..\n...\n...")).toEqual([0, 2]);
  });

  it("should return [2, 0] if it is on the last field in a small field", function () {
    expect(spaceship.find("...\n...\n..X")).toEqual([2, 0]);
  });

  it("should return [2, 2] if it is on the third field in the first row", function () {
    expect(spaceship.find("..X\n...\n...")).toEqual([2, 2]);
  });

  it("should return [0, 1] if it is on the first field in the second row", function () {
    expect(spaceship.find("...\nX..\n...")).toEqual([0, 1]);
  });

  it("should return 'Spaceship lost forever.' if there is no X", function () {
    expect(spaceship.find("...\n...\n...")).toEqual("Spaceship lost forever.");
  });

  it("should return [7, 2] if it is on this field in the big map", function () {
    expect(
      spaceship.find(
        "..........\n..........\n..........\n.......X..\n..........\n.........."
      )
    ).toEqual([7, 2]);
  });
});

describe("Spaceship finder", function () {
  beforeEach(function () {
    spaceship = new spaceShipFinder();
  });

  it("should return [0, 0] if it is on the first field", function () {
    expect(spaceship.find("X..\n...\n...")).toEqual([0, 0]);
  });

  it("should return [3, 3] if it is on the last field in a small field", function () {
    expect(spaceship.find("...\n...\n..X")).toEqual([2, 2]);
  });

  it("should return [0, 2] if it is on the third field in the first row", function () {
    expect(spaceship.find("..X\n...\n...")).toEqual([0, 2]);
  });

  it("should return [1, 0] if it is on the first field in the second row", function () {
    expect(spaceship.find("...\nX..\n...")).toEqual([1, 0]);
  });

  it("should return 'Spaceship lost forever.' if there is no X", function () {
    expect(spaceship.find("...\n...\n...")).toEqual("Spaceship lost forever.");
  });

  it("should return 'Spaceship lost forever.' if there is no X", function () {
    expect(
      spaceship.find(
        "..........\n..........\n..........\n.......X..\n..........\n.........."
      )
    ).toEqual([7, 2]);
  });
});

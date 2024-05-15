describe("Spaceship finder", function () {
  beforeEach(function () {
    spaceship = new spaceShipFinder();
  });

  it("should return [0, 0] if it is on the first field", function () {
    expect(spaceship.find("X..\n...\n...")).toEqual([0, 0]);
  });
});

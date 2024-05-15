describe("Spaceship finder", function () {
  beforeEach(function () {
    spaceship = new spaceShipFinder();
  });

  it("should return 0 for an empty string", function () {
    expect(spaceship.find("")).toEqual(0);
  });
});

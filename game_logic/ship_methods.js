const checkForShip = (player, coordinates) => {
  var shipPresent, ship;

  for (let i = 0; i < player.ships.length; i++) {
    ship = player.ships[i];
    shipPresent = ship.locations.filter((location) => {
      return location[0] === coordinates[0] && location[1] === coordinates[1];
    });
    if (shipPresent.length > 0) {
      return true;
    }
  }
  return false;
};

module.exports = {
  checkForShip,
};

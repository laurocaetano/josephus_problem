var Josephus = function() {};

Josephus.prototype.findTheLastSurvivor = function(numberOfSoldiers, orderToDie) {
  var survivor = 0;
  
  if (numberOfSoldiers > 0) {
    survivor = ((((this.findTheLastSurvivor(numberOfSoldiers - 1, orderToDie)) + orderToDie - 1) % numberOfSoldiers) + 1);
  }
  return survivor;
};
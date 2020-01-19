
function cars(x){
var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

return myCar[x];
}
module.exports = {cars };
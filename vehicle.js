// Create VehicleConstructor that takes in name, number of wheels, number of passengers
// Each Vehicle has 'makeNoise' method
// 1. Create a Bike, redefine makeNoise method to print 'ring ring!'
// 2. Create a Sedan, redefine makeNoise method to print 'honk honk!'
// 3. Create a Bus, add method that takes in number of passengers to pick up and adds to passenger count

function VehicleConstructor(name, wheels, passengers){
	var vehicle = {};
	// vehicle is the object that will eventually be returned

	// properties of vehicle object
	vehicle.name = name;
	vehicle.wheels = wheels;
	vehicle.passengers = passengers;

	// methods of vehicle object
	vehicle.makeNoise = function(){
		console.log("Vroooom!");
		// default action
	}

	// return vehicle object
	return vehicle;
}


// Bike
var Bike = VehicleConstructor("Bike", 2, 1);
Bike.makeNoise = function(){
	console.log("Ring Ring!");
}
Bike.makeNoise(); // Outputs "Ring Ring!"

// Sedan
var Sedan = VehicleConstructor("Sedan", 4, 7);
Sedan.makeNoise = function(){
	console.log("Honk Honk!");
}
Sedan.makeNoise(); // Outputs "Honk Honk!"

// Bus
var Bus = VehicleConstructor("Bus", 6, 1);
Bus.pickup = function(passengers){
	Bus.passengers += passengers;
	return Bus;
}
Bus.makeNoise(); // Outputs "Vroooom!"
console.log(Bus.passengers); // Outputs 1
Bus.pickup(4);
console.log(Bus.passengers); // Outputs 5



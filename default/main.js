var droneManager = require("manager.drone");

module.exports.loop = function(){

	// Clean memory
	for(var i in Memory.creeps){
		if (!Game.creeps[i]){
			delete Memory.creeps[i];
		}
	}

	// Run managersr
	droneManager.run();
}

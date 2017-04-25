var droneManager = require("manager.drone");

module.exports.loop = function()
{
	// Clean memory
	for(var i in Memory.creeps)
	{
		if (!Game.creeps[i])
		{
			delete Memory.creeps[i];
		}
	}

	// Get room
	var room = Game.spawns["Hive_Alpha"].room;
	var rooms = Game.rooms;

	// Run managers
	droneManager.run(room);
}

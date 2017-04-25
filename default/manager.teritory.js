/* The teritory manager is responsible for:
*	- Monitoring what rooms my creeps are active in.
*	- Monitoring the activity of neighbouring zones.
*	- Upgrading the controller.
*
* The teritory manager interacts with the following modules:
*	- manager.drone
*/

module.exports = {
  hTer: function(){
    var homeTeritory = [];
    for(var key in Game.spawns){
      homeTeritory.push(Game.spawns[key].room);
    }
    return homeTeritory;
  }
};

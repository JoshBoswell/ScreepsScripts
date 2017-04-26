/* The teritory manager is responsible for:
*	- Monitoring what rooms my creeps are active in.
*	- Monitoring the activity of neighbouring zones.
*	- Determing what zones have hostile activity occuring in them.
* - Identify ideal zones to expand into.
*
* The teritory manager interacts with the following modules:
*	- manager.drone
*/

module.exports = {
  homeTer: function(){
    var homeTeritory = [];
    for(var key in Game.spawns){
      homeTeritory.push(Game.spawns[key].room);
    }
    return homeTeritory;
  }
};

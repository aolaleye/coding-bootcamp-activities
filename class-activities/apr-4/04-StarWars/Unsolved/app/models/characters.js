var Sequilize = require("sequelize");
var sequelize = require("../config/connection.js");

var Character =  sequelize.define('Character', {

    routeName: Sequilize.STRING,
    name: Sequilize.STRING,
    role: Sequilize.STRING,
    age: Sequilize.INTEGER,
    forcePoints: Sequilize.INTEGER,
}, 
{
  timestamps: false
});

Character.sync();

modeule.exports = Character;
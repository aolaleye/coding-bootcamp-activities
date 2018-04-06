__How to set up Sequelize:__

In Command Line:

1. npm i sequelize mysql2
2. npm i -g sequelize-cli sequelize
3. sequelize init:config && sequelize init:models

_in config.json:_
holds configuration details
"development" is for laptop
"production" is for heroku

_in models_
index.js
- in controller.js we only need --> __require("../models")__ - this will automatically direct to index.js which will load all of the models
    
    _in controller.js:_

    var db = require("../models");
    app.get(.. , {
        db.User.findAll
    })

- create 'user.js' in models

    _in user.js:_

    module.exports = function(sequelize, DataTypes) {
        var User = sequelize.define("User", {
        email: DataTypes.STRING,
        password: DataTypes.STRING
        });

    return User;    
    }

- this defines our model

- create server.js (outside of models)

    _in server.js:_

    //boilerplate stuff

    var db = require("./models");

    //routes and stuff

    db.sequelize.sync().then(function(){
        app.listen(PORT)
    })

__To import schema sql database from command line:__
mysql -u root -p < schema.sql

__To go to sql database from command line and make sql commands:__
mysql -u root -p 

_mysql >_ CREATE DATABASE <database name>



__Joins:__
- want to be able to have multiple posts that point to the same author
- so you add an author id to posts table
- this is called a "Belongs-to Association"
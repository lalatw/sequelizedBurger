# sequelizedBurger
sequelizedBurger

# Link to deployed site
* https://infinite-springs-11340.herokuapp.com/
* https://lalatw.github.io/sequelizedBurger/


# Images
![SequelizedBurger Assignment](/public/assets/img/screenshot.png)


# Technology used
* Sequelize
* Express Handlebars
* Mysql2
* HTML
* CSS
* UIKit
* javascript
* jQuery
* node.js
* express
* body-parser
* Heroku


# npm dependencies

```
  "dependencies": {
    "body-parser": "^1.18.3",
    "express": "^4.16.3",
    "express-handlebars": "^3.0.0",
    "mysql2": "^1.6.1",
    "sequelize": "^4.38.1"
  }
```

# Code snippets

```
    module.exports = function(sequelize, DataTypes) {
    var Burgers = sequelize.define("Burgers", {
        burgerName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
        },
        devoured: {
        type: DataTypes.BOOLEAN, 
        allowNull: false,
        defaultValue: false
        }
    });


    return Burgers;
    };

```

# Learning points
* Create an app by applying the Model-View-Controller (MVC) architectural pattern.
* Apply Sequelize as an orm to convert data from and to database.
* Use express handlebars to create html templates for dynamic contents.
* Integrate both front end and back end programming work.
* Create api and html routes.
* Apply get, post, put methods.
* Apply Node.js to run backend. 
* Run npm install to use pre-built packages of modules.
* Deploy a Node web server to Heroku.


# Author 
[Shuhan Laura Lee](https://github.com/lalatw/sequelizedBurger)



# License
Standard MIT License

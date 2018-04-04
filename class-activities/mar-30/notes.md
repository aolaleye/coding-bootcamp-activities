__What is REST?__
* Representational State Transfer

/api/createAnimal 
/api/getAnimal
/api/updateAnimal
/api/deleteAnimal
_this is NOT REST_

GET (read)
POST (create)
PUT (update)
DELETE (delete)

GET /api/animals (read all animals)
GET /api/animals/27 (read a single animal)
POST /api/animals (create a single animal)
PUT /api/animals/27 (update a single animal)
DELETE /api/animals/27 (delete a single animal)
_this is REST_
_RESTful Application_

__What is ORM?__
* Object-Relational Mapping

__Abstraction__
* take an idea and make it more simple by wrapping code around it

__What is MVC?__
* Model View Controller
* When we are building software, how we structure our code and organize our files is important - called software architecture

* __Model__ - represents the stuff in your database, the core model of your application
* __Views__ - templates - handlebar templates, html pages, what the user sees/interacts with
* __Controller__ - the glue that binds the model and view together, it handles all of the viewers actions and interactions - where the routes are going to be, what decides when to write to database and what to read from the database
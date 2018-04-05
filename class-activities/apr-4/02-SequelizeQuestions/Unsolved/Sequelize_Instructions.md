* **Instructions:**

* Spend the next few minutes with your partner answering the following questions. You should be using the Sequelize Documentation (and whatever other references you find online).

  ```
  	- Answer: What is Sequelize?
	  	- a promise-based ORM for Node.js

  	- Answer: What advantages does it offer?
	  	- good support for database synchronization
		- you can create constructors for multiple use in code
		- syntax is easier than sql
		- data validation

  	- Answer: How do I install it? How do I incorporate it into my app?
		- npm install sequelize
		- require it in file

  	- Answer: What the heck is a Sequelize model? What role will it play?
		- model represents a table in a database

  	- Answer: Let's say I have the below table in MySQL. 

  		| Country     | PhoneCode | Capital   | IndependenceYear |
  		|-------------|-----------|-----------|------------------|
  		| Afghanistan | 93        | Kabul     | 1919             |
  		| Belarus     | 375       | Misk      | 1991             |
  		| Netherlands | 31        | Amsterdam | 1648             |
  		| Oman        | 968       | Muscat    | 1970             |
  		| Zambia      | 260       | Lusaka    | 1964             |

  		- How would I model it in Sequelize? 

		var tableName =  sequelize.define('Country', {
			  Country: {
				  type: Sequilize.STRING
			  },
			  PhoneCode: {
				  type: Sequilize.INTEGER
			  },
			  Capital: {
				  type: Sequilize.STRING
			  },
			  IndependenceYear: {
				  type: Sequilize.INTEGER
			  },
		}, 
		{
			freezeTableName: true 
		});

		Country.sync({force: true}).then(function() {
			return Country.create({
				Country: 'Afghanistan',
				PhoneCode: 93,
				Capital: 'Kabul',
				IndependenceYear: 1919
			});
		});

  		- How would I query for all the records where the Independence Year was less than 50 years ago?

		Country.findAll({
			where: {
				IndependenceYear: { $gt: new Date().getFullYear() - 50}
			}
		});

  		- How would I query the table, order it by descending Independence Years, and limit the results to just show 2 of the records. Skipping the first two? (i.e. Results: Zambia, Afghanistan)

		  	Country.findAll({
				offset: 2,
				limit: 2,
				order: [[sequelize.col('IndependenceYear'), 'DESC']]
			});

  	- Bonus: How do I use Sequelize to make changes to an existing table with data in it? 
  ```
		- use a built-in sequelize tool called migrations

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'testuser',
  password: 'test',
  database: 'mydb'
});

connection.connect()

class stadt {

	constructor(name, land, ranking) {
	  this.data = {
  		'name': name,
  		'land': land,
  		'ranking': ranking
	  }
	}

  	insert() {
		connection.query('INSERT INTO staedte SET ?', this.data, function (error, results, fields) {
  			if (error) throw error;
  			console.log('Insert completed!', results);
		});
	}

  	deleteOne(object) {
		connection.query('INSERT INTO staedte SET ?', this.data, function (error, results, fields) {
  			if (error) throw error;
  			console.log('Insert completed!', results);
		});
	}

  	showAll() {
		connection.query('SELECT * from staedte', function (error, results, fields) {
  			if (error) throw error;
  		console.log('The solution is: ', results);
		});
	}
}

const neueStadt = new stadt('Quedlinburg', 'Deutschland', 8);
neueStadt.insert();
neueStadt.showAll();
 
connection.end();

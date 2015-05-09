 
var SerialPort = require("serialport").SerialPort;
 
var portName = '/dev/tty.usbmodem1411';
var serialport = new SerialPort(portName, {
   baudRate: 57600,
   dataBits: 8,
   parity: 'none',
   stopBits: 1,
   flowControl: false
});
 

 var _mysql = require('mysql');

var HOST = 'localhost';
var PORT = 3306;
var MYSQL_USER = 'root';
var MYSQL_PASS = '';
var DATABASE = 'arduino';
var TABLE = 'gyro';

var mysql = _mysql.createConnection({
    host: HOST,
    port: PORT,
    user: MYSQL_USER,
    password: MYSQL_PASS,
});

mysql.query('use ' + DATABASE);

 
 
  	serialport.on('open', function(){ 
	  serialport.on('data', function(data){   
    console.log(''+data); 
    mysql.query('INSERT INTO '+TABLE+' (data) VALUES ("'+data+'")');
 
   
	});


});  
  
 



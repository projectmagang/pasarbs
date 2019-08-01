<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods:POST, GET, OPTIONS");
header("Access-Control-Allow-Headers:Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=utf-8");
// Initialize variable for database credentials
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbname = 'pasar';

//Create database connection
  $dblink = new mysqli($dbhost, $dbuser, $dbpass, $dbname);

//Check connection was successful
  if ($dblink->connect_errno) {
     printf("Failed to connect to database");
     exit();
  }

//Fetch 3 rows from actor table
  $result = $dblink->query("SELECT * FROM barang");

//Initialize array variable
  $dbdata = array();

//Fetch into associative array
  while ( $row = $result->fetch_assoc())  {
	$dbdata[]=$row;
  }

//Print array in JSON format
 echo json_encode($dbdata);
 
?>
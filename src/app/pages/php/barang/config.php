<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  header("Content-Type: application/json; charset=utf-8");

   $server     ="localhost";
   $user       ="root";
   $pass       ="";
   $dbase      ="pasar";
   $cs         ="utf8";

   $dsn    = "mysql:host=" . $server . ";port=3306;dbname=" . $dbase . ";charset=" . $cs;
   $opt    = array(
                            PDO::ATTR_ERRMODE               => PDO::ERRMODE_EXCEPTION,
                            PDO::ATTR_DEFAULT_FETCH_MODE    => PDO::FETCH_OBJ,
                            PDO::ATTR_EMULATE_PREPARES      => false,
                          );


   $pdo    = new PDO($dsn,$user,$pass,$opt);
   $data   = array();
?>

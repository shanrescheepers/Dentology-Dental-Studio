<?php
  error_reporting(E_ALL);
  ini_set('display_errors', 1);
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: *");
  header("Access-Control-Allow-Methods: *");

  include 'DbConnect.php';
  $objDb = new DbConnect;
  $conn = $objDb->connect();

  // FFN: Google how date time works in sql. Dan moet ons watch hoe de moer ons future dates kan maak in sql.
  //      Dit sal dan so iets lyk:
  //      SELECT * FROM appointment WHERE dateTime >= (Vandag se datum) && dateTime <= (N future datum)
  //      PS: NexkWekk

  $sql = "SELECT * FROM appointment WHERE dateTime ";  
  $stmt = $conn->prepare($sql);
  $stmt->execute();
  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

  echo json_encode($result);       
?>
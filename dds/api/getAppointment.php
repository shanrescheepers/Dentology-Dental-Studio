<!-- apptId	dateTime	docId	recepId	isDone -->
<?php
  error_reporting(E_ALL);
  ini_set('display_errors', 1);
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: *");
  header("Access-Control-Allow-Methods: *");

  include 'DbConnect.php';
  $objDb = new DbConnect;
  $conn = $objDb->connect();

  $appointment = json_decode( file_get_contents('php://input') );

  $sql = "SELECT * FROM appointment WHERE isDone = false && dateTime >= :dateTimeFrom && dateTime <= :dateTimeTo";  
  $stmt = $conn->prepare($sql);

  $stmt->bindParam(':dateTimeFrom', $doctor->dateTimeFrom);
  $stmt->bindParam(':dateTimeTo', $doctor->dateTimeTo);

  $stmt->execute();
  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

  echo json_encode($result);       
?>
<?php
  error_reporting(E_ALL);
  ini_set('display_errors', 1);
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: *");
  header("Access-Control-Allow-Methods: *");

  include 'DbConnect.php';
  $objDb = new DbConnect;
  $conn = $objDb->connect();

  $sql = "SELECT * FROM receptionist";  
  $stmt = $conn->prepare($sql);
  $stmt->execute();
  //   $result = mysqli_query($conn, $sql); Onder doen presies dieselfde
  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

  echo json_encode($result);       
?>
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
  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

  echo json_encode($result);       
?>

<!-- kyk net, dit is dieselfde as getReceptionist, verander dit in jou js file, waar jy die url endpoint hit. -->
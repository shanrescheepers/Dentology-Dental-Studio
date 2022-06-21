<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");

    // setted DB -> connect
    include 'DbConnect.php';

    // New object of dbConnect class
    $objDb = new DbConnect;
    $conn = $objDb->connect();
  
    // receptionist coming back from our front-end
    // php:// is alles wat inkim, kry al die cintents van dit, basies die json obj
    $doctor = json_decode( file_get_contents('php://input') );
    $sql = "UPDATE doctor SET isActive = false WHERE doctorId= :doctorId";

    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':doctorId', $doctor->doctorId);

    if($stmt->execute()) {
        $response = ['status' => 1, 'message' => 'Doctor deleted successfully.'];
    } else {
        $response = ['status' => 0, 'message' => 'Failed to delete doctor, try again.'];
    }
    echo json_encode($response);
?>
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

    // <!-- apptId	dateTime	docId	recepId	isDone -->
    
    // receptionist coming back from our front-end
    // php:// is alles wat inkim, kry al die cintents van dit, basies die json obj
    $appointment = json_decode( file_get_contents('php://input') );
    $sql = "DELETE FROM appointment WHERE apptId= :apptId";

    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':apptId', $appointment->apptId);

    if($stmt->execute()) {
        $response = ['status' => 1, 'message' => 'Appointment deleted successfully.'];
    } else {
        $response = ['status' => 0, 'message' => 'Failed to delete appointment, try again.'];
    }
    echo json_encode($response);
?>
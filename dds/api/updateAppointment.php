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

    // appointment coming back from our front-end
    $appointment = json_decode( file_get_contents('php://input') );
  
    // <!-- apptId	dateTime	docId	recepId	isDone -->
    
    // set sql statement, this is the action - The Action.
    // stuur die PK, saam met die values wat ge-update moet word. dan hy werk op die PK vir main referencing
    $sql = "UPDATE appointment SET apptId= :apptId, dateTime= :dateTime, docId= :docId, recepId= :recepId, isDone= :isDone WHERE apptId= :apptId";

    // This connects to my sql
    $stmt = $conn->prepare($sql);
  

    // Setting values into the variables
    $stmt->bindParam(':apptId', $appointment->apptId);
    $stmt->bindParam(':dateTime', $appointment->dateTime);
    $stmt->bindParam(':docId', $appointment->docId);
    $stmt->bindParam(':recepId', $appointment->recepId);
    
    // Executing above
    if($stmt->execute()) {
        $response = ['status' => 1, 'message' => 'appointment updated successfully.'];
    } else {
        $response = ['status' => 0, 'message' => 'Failed to create appointment.'];
    }
    // encoding here, sending it back to the Front-End
    echo json_encode($response);
?>
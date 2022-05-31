<!-- apptId	dateTime	docId	recepId	isDone -->
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
  
    // set sql statement, this is the action.
    $sql = "INSERT INTO appointment (apptId, dateTime, docId, recepId, isDone) VALUES(:apptId, :dateTime, :docId, :recepId, :isDone)";

    // This connects to my sql
    $stmt = $conn->prepare($sql);
  
    // Setting values into the variables
    $stmt->bindParam(':apptId', $appointment->apptId);
    $stmt->bindParam(':dateTime', $appointment->dateTime);
    $stmt->bindParam(':docId', $appointment->docId);
    $stmt->bindParam(':recepId', $appointment->recepId);
    $stmt->bindParam(':isDone', $appointment->isDone);

  
    // Executing above
    if($stmt->execute()) {
        $response = ['status' => 1, 'message' => 'New appointment record created successfully.'];
    } else {
        $response = ['status' => 0, 'message' => 'Failed to create your new appointment'];
    }
    // encoding here, sending it back to the Front-End
    echo json_encode($response);
?>
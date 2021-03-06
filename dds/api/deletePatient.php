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
   
    // patient coming back from our front-end
    // php:// is alles wat inkim, kry al die contents van dit, basies die json object as a whole.
    $patient = json_decode( file_get_contents('php://input') );
    $sql = "UPDATE patient SET isActive = false WHERE patientId = :patientId";

    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':patientId', $patient->patientId);

    if($stmt->execute()) {
        $response = ['status' => 1, 'message' => 'Patient deleted from DDS successfully.'];
    } else {
        $response = ['status' => 0, 'message' => 'Failed to delete patient, try again.'];
    }
    echo json_encode($response);
?>

<!-- 
patientId
name
surname
age
genderId
email
password
profileImage
phone
medAidNum --> 
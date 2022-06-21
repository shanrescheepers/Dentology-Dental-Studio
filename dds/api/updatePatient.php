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
    $patient = json_decode( file_get_contents('php://input') );
  

    // patientId Ascending 1
    // name
    // surname
    // age
    // genderId
    // email
    // password
    // profileImage
    // phone
    // medAidNum
    
    // set sql statement, this is the action - The Action.
    // stuur die PK, saam met die values wat ge-update moet word. dan hy werk op die PK vir main referencing
    $sql = "UPDATE patient SET name= :name, surname= :surname,  age= :age, genderId= :genderId, email= :email, profileImage= :profileImage, phone= :phone,   medAidNum= :medAidNum WHERE patientId= :patientId";

    // This connects to my sql
    $stmt = $conn->prepare($sql);
  

    // Setting values into the variables
    //     $stmt->bindParam(':patientId', $patient->id); ?
    $stmt->bindParam(':patientId', $patient->patientId);
    $stmt->bindParam(':name', $patient->name);
    $stmt->bindParam(':surname', $patient->surname);
    $stmt->bindParam(':age', $patient->age);
    $stmt->bindParam(':genderId', $patient->genderId);
    $stmt->bindParam(':email', $patient->email);
    $stmt->bindParam(':profileImage', $patient->profileImage);
    $stmt->bindParam(':phone', $patient->phone);
    $stmt->bindParam(':medAidNum', $patient->medAidNum);
    
    // Executing above
    if($stmt->execute()) {
        $response = ['status' => 1, 'message' => 'patient updated successfully.'];
    } else {
        $response = ['status' => 0, 'message' => 'Failed to create patient.'];
    }
    // encoding here, sending it back to the Front-End
    echo json_encode($response);
?>
<!-- DONE -->
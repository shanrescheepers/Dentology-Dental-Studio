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
    $doctor = json_decode( file_get_contents('php://input') );
  
    // set sql statement, this is the action - The Action.
    // stuur die PK, saam met die values wat ge-update moet word. dan hy werk op die PK vir main referencing
    $sql = "UPDATE doctor SET name= :name, surname= :surname, genderId= :genderId, profileImage= :profileImage, age= :age, phone= :phone, email= :email, spesId= :spesId WHERE docId= :docId";

    // This connects to my sql
    $stmt = $conn->prepare($sql);
  
    // name,surname, genderId, profileImage, age, phone, email, password,  spesId)
    // Setting values into the variables
    $stmt->bindParam(':docId', $doctor->docId);
    $stmt->bindParam(':name', $doctor->name);
    $stmt->bindParam(':surname', $doctor->surname);
    $stmt->bindParam(':genderId', $doctor->genderId);
    $stmt->bindParam(':profileImage', $doctor->profileImage);
    $stmt->bindParam(':age', $doctor->age);
    $stmt->bindParam(':phone', $doctor->phone);
    $stmt->bindParam(':email', $doctor->email);
    $stmt->bindParam(':spesId', $appointment->spesId);
    
    // Executing above
    if($stmt->execute()) {
        $response = ['status' => 1, 'message' => 'appointment updated successfully.'];
    } else {
        $response = ['status' => 0, 'message' => 'Failed to create appointment.'];
    }
    // encoding here, sending it back to the Front-End
    echo json_encode($response);
?>
<!-- DONE -->
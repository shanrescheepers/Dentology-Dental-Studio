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

    // doctor coming back from our front-end
    $doctor = json_decode( file_get_contents('php://input') );
  
    // set sql statement, this is the action.	
    $sql = "INSERT INTO doctor (name, surname, genderId, profileImage, age, phone, email, spesId, isActive) VALUES(:name, :surname, :age, :genderId, :phone, :email, :profileImage, :spesId, :isActive)";

    // This connects to my sql
    $stmt = $conn->prepare($sql);
  
    // Setting values into the variables

    $stmt->bindParam(':name', $doctor->name);
    $stmt->bindParam(':surname', $doctor->surname);
    $stmt->bindParam(':genderId', $doctor->genderId);
    $stmt->bindParam(':profileImage', $doctor->profileImage);
    $stmt->bindParam(':age', $doctor->age);
    $stmt->bindParam(':phone', $doctor->phone);
    $stmt->bindParam(':email', $doctor->email);
    $stmt->bindParam(':spesId', $doctor->spesId);
    $stmt->bindParam(':isActive', $doctor->isActive);
  
    // Executing above
    if($stmt->execute()) {
        $response = ['status' => 1, 'message' => 'New doctor record created successfully.'];
    } else {
        $response = ['status' => 0, 'message' => 'Failed to create the new doctor record.'];
    }
    // encoding here, sending it back to the Front-End
    echo json_encode($response);
?>
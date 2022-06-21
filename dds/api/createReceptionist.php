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
    $receptionist = json_decode( file_get_contents('php://input') );
  
    // set sql statement, this is the action.
    $sql = "INSERT INTO receptionist (name, surname, age, genderId, phone, email, password, profileImage, rankId, isActive) VALUES(:name, :surname, :age, :genderId, :phone, :email, :password, :profileImage, :rankId, :isActive)";

    // This connects to my sql
    $stmt = $conn->prepare($sql);
  
    // Setting values into the variables
    $stmt->bindParam(':name', $receptionist->name);
    $stmt->bindParam(':surname', $receptionist->surname);
    $stmt->bindParam(':age', $receptionist->age);
    $stmt->bindParam(':genderId', $receptionist->genderId);
    $stmt->bindParam(':phone', $receptionist->phone);
    $stmt->bindParam(':email', $receptionist->email);
    $stmt->bindParam(':password', $receptionist->password);
    $stmt->bindParam(':profileImage', $receptionist->profileImage);
    $stmt->bindParam(':rankId', $receptionist->rankId);
    $stmt->bindParam(':isActive', $receptionist->isActive);
  
    // Executing above
    if($stmt->execute()) {
        $response = ['status' => 1, 'message' => 'Receptionist record created successfully.'];
    } else {
        $response = ['status' => 0, 'message' => 'Failed to create receptionist.'];
    }
    // encoding here, sending it back to the Front-End
    echo json_encode($response);
?>
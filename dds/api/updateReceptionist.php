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
    // stuur die PK, saam met die values wat ge-update moet word. Hy werk op die PK vir main referencing
    $sql = "UPDATE receptionist SET name= :name, surname= :surname, age= :age, genderId= :genderId, phone= :phone, email= :email, password= :password, profileImage= :profileImage, rankId= :rankId WHERE recepId= :recepId";

    // This connects to my sql
    $stmt = $conn->prepare($sql);
  
    // Setting values into the variables
    $stmt->bindParam(':recepId', $receptionist->recepId);
    $stmt->bindParam(':name', $receptionist->name);
    $stmt->bindParam(':surname', $receptionist->surname);
    $stmt->bindParam(':age', $receptionist->age);
    $stmt->bindParam(':genderId', $receptionist->genderId);
    $stmt->bindParam(':phone', $receptionist->phone);
    $stmt->bindParam(':email', $receptionist->email);
    $stmt->bindParam(':password', $receptionist->password);
    $stmt->bindParam(':profileImage', $receptionist->profileImage);
    $stmt->bindParam(':rankId', $receptionist->rankId);

  
    // Executing above
    if($stmt->execute()) {
        $response = ['status' => 1, 'message' => 'Receptionist updated successfully.'];
    } else {
        $response = ['status' => 0, 'message' => 'Failed to create receptionist.'];
    }
    // encoding here, sending it back to the Front-End
    echo json_encode($response);
?>
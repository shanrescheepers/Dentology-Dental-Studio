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
    $receptionist = json_decode( file_get_contents('php://input') );
    $sql = "DELETE FROM receptionist WHERE recepId= :id";

    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $receptionist->id);

    if($stmt->execute()) {
        $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
    } else {
        $response = ['status' => 0, 'message' => 'Failed to delete record.'];
    }
    echo json_encode($response);
?>
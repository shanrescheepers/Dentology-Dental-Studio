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
medAidNum
 -->
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

    // Patient coming back from our front-end
    $patient = json_decode( file_get_contents('php://input') );
  
    // set sql statement, this is the action.
    $sql = "INSERT INTO patient ( name, surname, age, genderId, email, profileImage, phone, medAidNum, isActive) VALUES( :name, :surname, :age, :genderId, :email, :profileImage, :phone, :medAidNum, :isActive)";

    // This connects to my sql
    $stmt = $conn->prepare($sql);
  
    // Setting values into the variables
 
    $stmt->bindParam(':name', $patient->name);
    $stmt->bindParam(':surname', $patient->surname);
    $stmt->bindParam(':age', $patient->age);
    $stmt->bindParam(':genderId', $patient->genderId);
    $stmt->bindParam(':email', $patient->email);
    $stmt->bindParam(':profileImage', $patient->profileImage);
    $stmt->bindParam(':phone', $patient->phone);
    $stmt->bindParam(':medAidNum', $patient->medAidNum);
    $stmt->bindParam(':isActive', $patient->isActive);
  
    // Executing above
    if($stmt->execute()) {
        $response = ['status' => 1, 'message' => 'patient record created successfully.'];
    } else {
        $response = ['status' => 0, 'message' => 'Failed to create patient.'];
    }
    // encoding here, sending it back to the Front-End
    echo json_encode($response);
?>
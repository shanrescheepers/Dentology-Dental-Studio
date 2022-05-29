<?php
// First: to run script, we need the db_connection, to connect to the DB
include 'db_connection.php';

//Then: 'users'= tablename. if you have multiple sql commands, name $sql -> $sql1, $sql2 etc....
//SELECT means READ
$sql = "SELECT * FROM `receptionist`;";

//Next thing is to STORE that RESULT. Run the connection function from your db_connection.php, then run sql query
$result = mysqli_query($conn, $sql);

//Next:: Check the result. We're checking for the number of rows from the result. To make sure there is something there for us to show and see
$resultCheck = mysqli_num_rows($result);

//Next: if statement for the results to check(resultCheck). We're returning the number of rows from that result.
//If it's greater than 0, we know we have something in the DB that matches our query (which is good and which we'll work with)
// else, with the echo, the echo is basically a visual CONSOLE.LOG
// SEMI COLONS SUPER NB!! ;;;;
//To work with tables and rows we work with loops, looping through different arrays. We're making the resultCheck return an array based on results.
if($resultCheck > 0){
//Next: WHILE: 'while there are results, we want to do a couple of things
//We're going to store the result as an array in a var called $row. $row=one item in a table, you can call it anything, but RL prac, this is good for one item in a table
//fetching_associative array based on our results (resultCheck). Get an array back stored within ().
// Array should contain result from our SQL Query command

    echo "$result"

} else {
    echo "<h1>No Data Found on DB</h1>";
}

?>
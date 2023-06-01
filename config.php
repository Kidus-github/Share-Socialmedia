<?php

    // session_start();
    $host="localhost";
    $dbname= "Share";
    $username="root";
    $password = "";


    $conn = mysqli_connect(hostname : $host, 
                         username: $username, 
                         password: $password, 
                         database: $dbname);


    if($conn->connect_errno){
        die("Connection error:" . $conn->connect_error);
    }            

return $conn;
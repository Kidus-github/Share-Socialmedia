<?php
    // session_start();
    include_once "config.php";
    $email = mysqli_real_escape_string($conn, $_POST['username']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    if(!empty($email) && !empty($password)){
        $sql = mysqli_query($conn, "SELECT * FROM user where email='{$email}' and password_hash ='{$password}' or username='{$email}' and password_hash ='{$password}'");
        if(mysqli_num_rows($sql) > 0){
            $row = mysqli_fetch_assoc($sql);
            $_SESSION['id'] = $row['id']; 
            echo "success";

        }else{
            echo "Email or Password is Incorrect!";
        }
    }else{
        echo "All inputs are required!";
    }

    ?>
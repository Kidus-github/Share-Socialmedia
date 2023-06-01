<?php
    session_start();
    // echo "hello sign up";
    include_once "config.php";
    $fname = mysqli_real_escape_string($conn, $_POST['firstname']);
    $lname = mysqli_real_escape_string($conn, $_POST['lastname']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);
    $month = mysqli_real_escape_string($conn, $_POST['month']);
    $day = mysqli_real_escape_string($conn, $_POST['days']);
    $year = mysqli_real_escape_string($conn, $_POST['years']);
    $gender = mysqli_real_escape_string($conn, $_POST['genders']);

    if(!empty($fname) && !empty($lname) && !empty($email) && !empty($password) && !empty($month) && !empty($day) && !empty($year) && !empty($gender)){
        if(filter_var($email, FILTER_VALIDATE_EMAIL)){
            $sql= mysqli_query($conn, "SELECT email FROM user where email = '{$email}'");
            if(mysqli_num_rows($sql)>0){
                echo"$email - This email already exist!";
            }else{
                $sql2 = mysqli_query($conn, "INSERT INTO `user`( `fname`, `lname`, `password_hash`, `email`, `gender`, `date_of_birth`, `created_at`) 
                VALUES ('{$fname}','{$lname}','{$password}','{$email}', '{$gender}', '{$year}' + '-' + '{$month}' + '-' + '{$day}' , '2023-30-5' )");

            if($sql2){
                $sql3 = mysqli_query($conn, "SELECT * FROM `user` WHERE email = '{$email}'");
                if(mysqli_num_rows($sql3) > 0){
                    $row = mysqli_fetch_assoc($sql3);
                    $_SESSION['id'] = $row['id']; 
                    echo "success";
                }else
                    echo "Something went wrong!";
            }
            }
        }else{
            echo "$email - This is not a valid email";
        }

    }else{
        echo "All input field must be submitted";
    }

?>
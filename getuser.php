<?php 
          session_start();
          include_once "config.php";
            $sql= mysqli_query($conn, "SELECT * FROM user where id = {$_SESSION['id'] }");
            if(mysqli_num_rows($sql) > 0){
                $row = mysqli_fetch_assoc($sql);
            }
            $data = array(
                'id' => $row['id'], 
                'fname' => $row['fname'], 
                'lname' => $row['lname'], 
                'password' => $row['password_hash'], 
                'email' => $row['email'], 
                'username' => $row['username'], 
                'gender' => $row['gender'], 
                'date_of_birth' =>$row['date_of_birth'], 
                'profile_picture' => $row['profile_picture'], 
                'bio' => $row['bio'], 
                'website' => $row['website'], 
                'phone_number' => $row['phone_number'], 
                'is_verified' => $row['is_verified'], 
                'is_active' => $row['is_active'], 
                'timezone' => $row['timezone'], 
                'privacy_setting' => $row['privacy_setting'], 
                'notification_setting' => $row['notification_setting'], 
                'last_login' => $row['last_login'], 
                'login_count' => $row['login_count']
            );
            
            header('Content-Type: application/json');
            
            echo json_encode($data);
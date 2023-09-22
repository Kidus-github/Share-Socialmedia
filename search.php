<?php
session_start();
if(isset($_SESSION['id'])){
    include_once "config.php";
    $outgoing_id = mysqli_real_escape_string($conn, $_SESSION['id']);
    $incoming_id = mysqli_real_escape_string($conn, $_POST['search_sidebar']);
    $output = "";
    
    $sql = "SELECT `id`,`fname`,`lname`,`email`,`username`,`gender`,`date_of_birth`,
	`profile_picture`,`bio`,`website`,`status`,
    `location`,`is_verified`, `is_active`
    FROM user
    WHERE username LIKE '%$incoming_id%' OR fname like '%$incoming_id%' OR lname like '%$incoming_id%'";
    // $query = mysqli_query($conn, $sql);

    $data = array(); // Initialize an empty array to store the rows


    $query = mysqli_query($conn, $sql);
    if (mysqli_num_rows($query) > 0){

        while ($row = mysqli_fetch_assoc($query)){
            // Append each row to the array
            $data[] = array(
                'id' => $row['id'],
                'fname' => $row['fname'],
                'lname' => $row['lname'],
                'email' => $row['email'],
                'username' => $row['username'],
                'gender' => $row['gender'],
                'date_of_birth' => $row['date_of_birth'],
                'profile_picture' => $row['profile_picture'],
                'bio' => $row['bio'],
                'website' => $row['website'],
                'status' => $row['status'],
                'location' => $row['location'],
                'is_verified' => $row['is_verified'],
                'is_active' => $row['is_active']
                
                
            );
        }
    }
    
    header('Content-Type: application/json');

    echo json_encode($data);
}

?>
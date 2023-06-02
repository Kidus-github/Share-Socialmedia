<?php
    session_start();
    include_once "config.php";
    
    $sql = mysqli_query($conn, "SELECT friends.*, user.fname, user.lname, user.username, user.profile_picture, user.is_active FROM friends
                            JOIN user ON friends.friend_id = user.id
                            WHERE friends.user_id = '{$_SESSION['id']}' AND friends.status = 'pending'");

    
    $data = array(); // Initialize an empty array to store the rows
    
    if (mysqli_num_rows($sql) > 0) {
        while ($row = mysqli_fetch_assoc($sql)) {
            // Append each row to the array
            $data[] = array(
                'friendRequest_id' => $row['friendRequest_id'],
                'user_id' => $row['user_id'],
                'friend_id' => $row['friend_id'],
                'status' => $row['status'],
                'created_at' => $row['created_at'],
                'updated_at' => $row['updated_at'],
                'action_user_id' => $row['action_user_id'],
                'is_deleted' => $row['is_deleted'],
                'blocked_at' => $row['blocked_at'], 
                'fname' => $row['fname'],
                'lname' => $row['lname'],
                'username' => $row['username'],
                'profile_picture' => $row['profile_picture'],
                'is_active' => $row['is_active']
                
            );
        }
    }
    
    header('Content-Type: application/json');

    echo json_encode($data);
    
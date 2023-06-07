<?php
session_start();
include_once "config.php";


$userID = $_SESSION['id'];
$sql = mysqli_query($conn, "SELECT DISTINCT posts.*, user.fname, user.lname, user.profile_picture, 
                             IF(`like`.user_id = '{$_SESSION['id']}', 1, 0) AS is_liked
                             FROM posts 
                             JOIN friends ON posts.user_id = friends.friend_id 
                             JOIN user ON posts.user_id = user.id 
                             LEFT JOIN `like` ON posts.post_id = `like`.post_id
                             WHERE friends.user_id = '{$userID}' 
                             AND friends.status = 'accepted'
                             or `like`.user_id = '{$_SESSION['id']}'");

 


  $data = array(); // Initialize an empty array to store the rows
    
    if (mysqli_num_rows($sql) > 0) {
        while ($row = mysqli_fetch_assoc($sql)) {
            // Append each row to the array
            $data[] = array(
                'post_id' => $row['post_id'],
                'user_id' => $row['user_id'],
                'content' => $row['content'],
                'media' => $row['media'],
                'created_at' => $row['created_at'],
                'updated_at	' => $row['updated_at'],
                'visibility' => $row['visibility'],
                'is_edited' => $row['is_edited'],
                'is_deleted' => $row['is_deleted'], 
                'location' => $row['location'],
                'fname' => $row['fname'],
                'lname' => $row['lname'],
                'profile_picture' => $row['profile_picture'],
                'is_liked' => $row['is_liked']
            );
        }
    }
    
    header('Content-Type: application/json');

    echo json_encode($data);
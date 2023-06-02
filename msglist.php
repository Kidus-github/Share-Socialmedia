<?php
    session_start();
    include_once "config.php";
    
    $sql = mysqli_query($conn, "SELECT DISTINCT user.id, user.fname, user.lname, user.profile_picture, message.content AS last_message, message.recipient_id
                                FROM user
                                JOIN message ON user.id = message.sender_id
                                JOIN (
                                    SELECT MAX(msg_id) AS max_msg_id, sender_id
                                    FROM message
                                    WHERE recipient_id = {$_SESSION['id']}
                                    GROUP BY sender_id
                                ) AS subquery ON message.msg_id = subquery.max_msg_id
                                WHERE message.recipient_id = {$_SESSION['id']}");
    
    $data = array(); // Initialize an empty array to store the rows
    
    if (mysqli_num_rows($sql) > 0) {
        while ($row = mysqli_fetch_assoc($sql)) {
            // Append each row to the array
            $data[] = array(
                'id' => $row['id'],
                'fname' => $row['fname'],
                'lname' => $row['lname'],
                'profile_picture' => $row['profile_picture'],
                'last_message' => $row['last_message'],
                'recipient_id' => $row['recipient_id']
            );
        }
    }
    
    header('Content-Type: application/json');
    echo json_encode($data);
?>

    
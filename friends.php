<?php
    session_start();
    include_once "config.php";
      $sql= mysqli_query($conn, "SELECT * FROM `friends` where user_id	= '{$_SESSION['id']}' and status = 'pending' ");
      if(mysqli_num_rows($sql) > 0){
          $row = mysqli_fetch_assoc($sql);
      }

      $data = array(
                    'friendRequest_id' => $row['friendRequest_id'],
                    'user_id'=> $row['user_id'],
                    'friend_id' => $row['friend_id'],
                    'status' => $row['status'],
                    'created_at' => $row['created_at'],
                    'updated_at' => $row['updated_at'],
                    'action_user_id' => $row['action_user_id'],
                    'is_deleted' => $row['is_deleted'],
                    'blocked_at' => $row['blocked_at']
        );
      
      header('Content-Type: application/json');
      
      echo json_encode($data);
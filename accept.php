<?php
session_start();
include_once "config.php";

if (isset($_POST['userid'])) {
  $userid = $_POST['userid'];

  // Update the friends table
  $sql = mysqli_query($conn, "UPDATE friends SET status = 'accepted' WHERE friend_id = '{$userid}'");

  if ($sql) {
    $currentDate = date('Y-m-d');
    $sql2 = mysqli_query($conn, "INSERT INTO friends (user_id, friend_id, status, created_at, action_user_id, is_deleted)
    VALUES ({$userid}, {$_SESSION['id']}, 'accepted', '{$currentDate}', '{$_SESSION['id']}', '0')");
  if($sql2)
      echo "success";
  } else {
    echo "error";
  }
}
?>

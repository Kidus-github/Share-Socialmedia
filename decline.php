<?php
session_start();
include_once "config.php";

if (isset($_POST['userid'])) {
  $userid = $_POST['userid'];

  // Update the friends table
  $sql = mysqli_query($conn, "UPDATE friends SET status = 'declined' WHERE friend_id = '{$userid}'");

  if ($sql) {
    echo "success";
  } else {
    echo "error";
  }
}
?>
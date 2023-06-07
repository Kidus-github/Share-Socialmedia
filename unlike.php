<?php
session_start();
include_once "config.php";

$userID = $_SESSION['id'];
if (isset($_POST['post_id'])) {
  $post_id = $_POST['post_id'];
  
    $currentDate = date('Y-m-d');
    
    $sql2 = mysqli_query($conn, "DELETE FROM `like` WHERE post_id = '{$post_id}' and user_id = '{$userID}'");
  if($sql2){
      echo "success";
  }else {
    echo "error";
  }


}
?>
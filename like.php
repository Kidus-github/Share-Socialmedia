<?php
session_start();
include_once "config.php";

if (isset($_POST['post_id'])) {
  $post_id = $_POST['post_id'];

  
    $currentDate = date('Y-m-d');
    
    $sql2 = mysqli_query($conn, "INSERT INTO `like`(`user_id`, `post_id`, `created_at`) VALUES ('{$_SESSION['id']}','{$post_id}','{$currentDate}')");
  if($sql2){
      echo "success";
  }else {
    echo "error";
  }


}
?>
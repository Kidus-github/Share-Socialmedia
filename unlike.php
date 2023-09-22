<?php
session_start();
include_once "config.php";

if (isset($_POST['post_id'])) {
  $post_id = $_POST['post_id'];
  
    $currentDate = date('Y-m-d');
    
    $sql2 = mysqli_query($conn, "DELETE FROM `like` WHERE post_id = '{$post_id}' and user_id = '{$_SESSION['id']}'");
  if($sql2){
      echo "success";
  }else {
    echo "error";
  }


}
?>
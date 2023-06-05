<?php
session_start();
include_once "config.php";

if (isset($_POST['post_id'])) {
  $post_id = $_POST['post_id'];

  
    $currentDate = date('Y-m-d');
    
    $sql2 = mysqli_query($conn, "Select count(*) as count from like where post_id = '{$post_id}'");
  if($row = mysqli_fetch_assoc($sql2)){
      echo $row['count'];
  }else {
    echo "error";
  }
}
?>
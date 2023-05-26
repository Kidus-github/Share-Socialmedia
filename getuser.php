<?php
require 'config.php';



$sql="select * from user where email = `${}`"

$result= mysqli_query($conn, $sql);


$user = mysql_fetch_all($result, MYSQLI_ASSOC);







?>
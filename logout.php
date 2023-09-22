<?php
session_start();

include_once "config.php";

$sql = "UPDATE `user` SET `is_active` = false WHERE `id` = '{$_SESSION['id']}'";
$result = mysqli_query($conn, $sql);

if ($result) {
    echo "success";
} else {
    echo "error";
}

unset($_SESSION['id']);


?>
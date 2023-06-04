<?php
    session_start();
    if(isset($_SESSION['id'])){
        include_once "config.php";
        $outgoing_id = mysqli_real_escape_string($conn, $_SESSION['id']);
        $incoming_id = mysqli_real_escape_string($conn, $_POST['incoming_id']);
        $message = mysqli_real_escape_string($conn, $_POST['message']);

        if(!empty($message)){
            $currentDate = date('Y-m-d');
            $sql = mysqli_query($conn, 
            "INSERT INTO `message`(`sender_id`, `recipient_id`, `content`, `timestamp`, `is_read`) 
            VALUES({$incoming_id}, {$outgoing_id}, '{$message}', '{$currentDate}', '0')") or die(mysqli_error($conn));
        }
    }else{
        header("location: ./loginpage.php");    
    }
?> 
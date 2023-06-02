<?php
session_start();
if(isset($_SESSION['id'])){
    include_once "config.php";
    $outgoing_id = mysqli_real_escape_string($conn, $_SESSION['id']);
    $incoming_id = mysqli_real_escape_string($conn, $_POST['incoming_id']);
    $output = "";

    $sql = "SELECT * FROM message 
            LEFT JOIN user ON user.id = message.recipient_id
            WHERE (recipient_id  = {$outgoing_id} AND sender_id = {$incoming_id})
            OR (recipient_id  = {$incoming_id} AND sender_id = {$outgoing_id}) ORDER BY msg_id DESC ";
    $query = mysqli_query($conn, $sql);
    if(mysqli_num_rows($query) > 0){
        while ($row = mysqli_fetch_assoc($query)){
            if($row['recipient_id'] === $outgoing_id){
                    $output .= '<div class="chat outgoing">
                                    <div class="details">
                                        <p>'.$row['content'].'</p>
                                    </div>
                                </div>';
            }else{
                $output .= '<div class="chat incoming">
                            <img src="'.$row['profile_picture'].'" alt="" class="msgprofile">
                            <div class="details">
                                <p>'.$row['content'].'</p>
                            </div>
                        </div>';
            }
        }
        echo $output;
    }
}else{
    header("location: ./loginpage.php");    
}

?>
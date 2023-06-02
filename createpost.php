<?php
    session_start();
    // echo "hello sign up";
    include_once "config.php";
    $createinput = mysqli_real_escape_string($conn, $_POST['create']);
    $filename = $_FILES['file-input']['name'];
    $filetype = $_FILES['file-input']['type'];
    $tmpfile = $_FILES['file-input']['tmp_name'];
    $userID = $_SESSION['id'];

    

    if(!empty($createinput) || !isset($_FILES['file-input'])){
            $currentDate = date('Y-m-d');
                if(isset($_FILES['file-input'])){
                    $img_explode = explode('.', $filename);
                    $img_ext= end($img_explode);
                    $extensions = ['png', 'jpg', 'jpeg' , 'mp4', 'mpeg'];
                    if(in_array($img_ext, $extensions) === true){
                        $time = time();

                        $new_img_name= $time.$filename;
                        if(move_uploaded_file($tmpfile, "img/photos-to-be-used/".$new_img_name)){
                            $img_name = "img/photos-to-be-used/".$time.$filename;
                            $sql = mysqli_query($conn, "INSERT INTO `posts`(`user_id`, `content`, `media`, `created_at`, `visibility`)
                                        VALUES ('{$userID}','{$createinput}','{$img_name}','{$currentDate}','pub')");

                            if($sql){
                                    echo "success";
                                }else
                                    echo "Something went wrong!";
                        }
                    }else{
                        echo "please enter the correct file format jpg, jpeg, mp4, mpeg, or png";
                    }
                }else{
                        $sql2 = mysqli_query($conn, "INSERT INTO `posts`(`user_id`, `content`, `created_at`)
                        VALUES ('{$userID}','{$createinput}','{$currentDate}'");
        
                        if($sql2){
                                echo "success";
                            }else
                                echo "Something went wrong!";
                }

    }else{
        echo "Noting to share";
    }

?>
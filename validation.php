<!-- <?php
// require_once 'config.php';

// // <script>
// // var createNew =document.querySelector('create') /script>

// // if(empty($_POST["email"])){
// //     die("Please enter your username or email signup");
// // }elseif(! filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)){
// //     die("Please enter a valid email");
// // }
// // if(strlen($_POST["password"]) < 8){
// //     die("password must be at least 8 characters");
// // }
// // if (! preg_match("/[a-z]/i", $_POST["password"])){
// //     die("password must include at least one character");
// // }
// // if (! preg_match("/[0-9]/i", $_POST["password"])){
// //     die("password must contain at least one number");
// // }
// // $passwordhash = password_hash($_POST["password"], PASSWORD_DEFAULT);

// if(isset($_POST["submit"])){
//     $fname = $_POST["firstname"];
//     $lname = $_POST["lastname"];
//     $email = $_POST["email"];
//     $password= $_POST["password"];
//     $gender= $_POST["gender"];
 
//     $duplicate= mysqli_query($conn, "select * from user where email = '$email'");

//     // if(mysqli_num_rows($duplicate) > 0 ){
//     //     echo
//     //     "<script> alert('username or email has been taken')</script>";
//     // }else{
//     //         $query= "INSERT INTO user(fname, lname, email, password, gender ,date_of_birth, created_at) 
//     //         values('$fname','$lname', '$email' , '$passwordhash', '$gender' , '2003-03-14', '2023-05-18')";

//     //         mysqli_query($conn,$query); 

//     //         echo
//     //     "<script> alert('registered successfully')</script>";
        
//     // }

// }

// if(empty($_POST["username"])){
//     die("Please enter your username or email");
// }elseif(! filter_var($_POST["username"], FILTER_VALIDATE_EMAIL)){
//     die("Please enter a valid email");
// }
// if(strlen($_POST["password"]) < 8){
//     die("Invalid password");
// }
// // if(isset($_POST["login"])){
// //     $user = $_POST["username"];
// //     $password = $_POST["password"];
// //     console.log($_POST)

// //     $check= mysqli_query($conn, "select * from user where email = '$user' and password = '$password'");
// //     $row = mysqli_fetch_assoc($check);

// //     if(mysqli_num_rows($check) > 0 ){
// //         header("location: index.php");
// //     }else{
// //         echo
// //         "<script>alert('login unsuccessful') </script>";
// //     }


// // } -->

?>
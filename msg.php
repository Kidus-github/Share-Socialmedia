<?php
session_start();
include_once "config.php";

$recipientId = $_SESSION['id'];

$sql = "SELECT message.*, user.profile_picture, user.fname, user.lname
        FROM message
        JOIN user ON message.sender_id = user.id
        WHERE message.recipient_id = '{$recipientId}'
        GROUP BY message.sender_id";

$result = mysqli_query($conn, $sql);

if ($result) {
  // Create an array to store the grouped messages
  $groupedMessages = array();
  
  // Fetch the rows and process the data
  while ($row = mysqli_fetch_assoc($result)) {
    $senderId = $row['sender_id'];
    $profilePicture = $row['profile_picture'];
    $fname = $row['fname'];
    $lname = $row['lname'];
    
    // Check if the sender already exists in the groupedMessages array
    if (!isset($groupedMessages[$senderId])) {
      // Create a new array for the sender
      $groupedMessages[$senderId] = array(
        'senderId' => $senderId,
        'profilePicture' => $profilePicture,
        'fname' => $fname,
        'lname' => $lname,
        'messages' => array()
      );
    }
    
    // Add the current message to the sender's array of messages
    $groupedMessages[$senderId]['messages'][] = $row;
  }
  
  // Convert the grouped messages array to JSON format
  $json = json_encode($groupedMessages);
  
  // Return the JSON response
  header('Content-Type: application/json');
  echo $json;
} else {
  // Handle query error
  echo "Error: " . mysqli_error($conn);
}

mysqli_free_result($result);
mysqli_close($conn);

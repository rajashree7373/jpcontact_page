<?php

$channel = isset($_POST['source'])?$_POST['source']:'';

if($channel == ''){
 $channel = "JP INFRA";
}
else {
 $channel = $_POST['source'];
}


$brandName = $_POST['brandName'];
$catName = $_POST['catName'];
$firstName = $_POST['firstName'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$source = $channel;
$medium = isset($_POST['medium'])?$_POST['medium']:'';
$campaign = isset($_POST['campaign'])?$_POST['campaign']:'';
$term = isset($_POST['term'])?$_POST['term']:'';

$servername = "localhost:3306";
$username = "alched42_jpinfra";
$password = "8)(*&TUYIkhjgbdsv25&*^RYtgj";
$dbname = "alched42_panorama_suites";

// Create connection
$conn = new mysqli($servername, $username, $password,$dbname);

// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

$sql = "INSERT INTO m3m_panorama_suites(`full_name`, `email_id`, `phone`, `brand`, `category`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`) 
VALUES ('$firstName','$email','$phone','$brandName','$catName','$source','$medium','$campaign','$term')";

if ($conn->query($sql) === TRUE) {
echo "New record created successfully";
} else {
echo "Error: " . $sql . "<br>" . $conn->error;
}$conn->close();


?>
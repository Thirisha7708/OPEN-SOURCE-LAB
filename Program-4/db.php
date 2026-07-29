<?php
// Database connection
$servername = 'localhost';
$username = 'root';
$password = '';
$database = 'logindb';
$port='3308';


$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} else {
    echo "Database Connected Successfully";
}
?>
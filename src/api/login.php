<?php

include 'connect.php';
header('Access-Control-Allow-Origin:*');
session_start();
$username = isset($_POST['username']) ? $_POST['username'] :null;
$password = isset($_POST['password']) ? $_POST['password'] :null;

$password = md5($password);

$sql="select * from student where username='$username' and password='$password'";


$result = $conn->query($sql);


if($result->num_rows>0){
    echo "success";
} else {
    echo "fail";
}





?>
<?php
include 'register.php';
if(!isset($_SESSION['id'])) header("location:index.php");
$id = $_SESSION['id'];
$sql = "Select * from profile where id = '$id'";
$res = mysqli_query($conn,$sql);
$data = array();
while($row = mysqli_fetch_object($res)){
    array_push($data,$row);
}
echo json_encode($data);
?>
        

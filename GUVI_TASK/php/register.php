<?php
session_start();

$conn = mysqli_connect("localhost",'root','','register');
if (!$conn) {
    die("Connection Failed :-".mysqli_connect_error());
}
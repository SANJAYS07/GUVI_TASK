<?php
    include 'register.php';
    if (isset($_POST['email']) && isset($_POST['password']) && isset($_POST['name']) && isset($_POST['dob']) && isset($_POST['age'])) {
        $email = $_POST['email'];
        $password = $_POST['password'];
        $name = $_POST['name'];
        $dob= $_POST['dob'];
        $age= $_POST['age'];

        $Sql = 'INSERT into profile (email,password,name,dob,age) VALUES("'.$email.'","'.$password.'","'.$name.'","'.$dob.'","'.$age.'")';
        mysqli_query($conn,$Sql);

        echo 'REGISTERED SUCCESSFULLY!!!';
    }

    elseif (isset($_POST['Login_email']) && isset($_POST['login_password'])) {
        $Login_email = $_POST['Login_email'];
        $login_password = $_POST['login_password'];

        $Sql = "Select * from profile where email ='$Login_email' && password = '$login_password'";
        $res = mysqli_query($conn,$Sql);
        
        if (mysqli_num_rows($res) > 0) {
            $row = mysqli_fetch_assoc($res);
            $_SESSION['id'] = $row['id'];
            $arr = array("status" => 'success', 'message' => 'LOGIN SUCCESSFULL!!');
        }else {
            $arr = array("status" => 'error', 'message' => 'Check email or password!!!');
        }
        echo  json_encode($arr);
    }
?>
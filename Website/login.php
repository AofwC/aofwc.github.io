<?php
session_start();

include("db_conn.php");

if (isset($_POST['uname']) && isset($_POST['password'])) {

    function Validate($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
}

$uname = Validate($_POST['uname']);
$pass = Validate($_POST['password']);

if (empty($uname) || empty($pass)) {
    header("Location: login.php?error=empty input");
    exit();
}

$sql = "SELECT * FROM users WHERE user_name='$uname' AND password='$pass'";

$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 1) {
    $row = mysqli_fetch_array($result);
    if ($row["user_name"] == $uname && $row['password'] === $pass) {
        echo "Login successful";
        $_SESSION['user_name'] = $row['user_name'];
        $_SESSION['name'] = $row['name'];
        $_SESSION['id'] = $row['id'];
        header('Location: home.php');
        exit();
    } else {
        header("Location: login.php?error=Incorrect username or password");
        exit();
    }
}

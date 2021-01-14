<?php

  $username = $_POST['name'];
  $password = $_POST['password'];
  echo $username;
  $link = mysqli_connect('127.0.0.1', 'root', 'root', 'anta');
  // $sql = "INSERT INTO `users` (`username`, `password`, `nickname`) VALUES ('$username', '$password', '$username')";
  $sql = "INSERT INTO `users`(`username`, `password`, `nickname`) VALUES ('$username', '$password', '$username')";
  $res = mysqli_query($link, $sql);
  echo json_encode(array(
    "sql" => $sql
  ));
?>


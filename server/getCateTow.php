<?php 

$one = $_GET['cat_one'];

$link = mysqli_connect('localhost','root','root','anta');

$sql = "SELECT `cat_two_id` FROM `goods` WHERE `cat_one_id`='$one' GROUP BY `cat_two_id`";
$res = mysqli_query($link, $sql);
$data = mysqli_fetch_all($res, MYSQLI_ASSOC);


echo json_encode(array(
    "message" => "获取二级分类列表成功",
    "code" => 1,
    "list" => $data,
    "sql" => $sql
))
?>
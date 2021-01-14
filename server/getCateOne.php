<?php

  $link = mysqli_connect('127.0.0.1', 'root', 'root', 'anta');
  $sql = "SELECT `cat_one_id` FROM `goods` GROUP BY `cat_one_id`";
  $res = mysqli_query($link, $sql);
  $data = mysqli_fetch_all($res, MYSQLI_ASSOC);
 
  // 返回结果给前端
  echo json_encode(array(
    "message" => "获取一级分类列表成功",
    "code" => 1,
    "list" => $data
  ));

?>

<?php
//连接数据库
require("connect.php");

header('Access-Control-Allow-Origin:*');

// $pageNo = isset($_GET['pageNo']) ? $_GET['pageNo'] : 1;

// $qty = isset($_GET['qty']) ? $_GET['qty'] : 10;

$sql = "select * from `goods`";

//执行sql语句,查询结果
$result = $conn->query($sql);
//var_dump($result);
$row = $result->fetch_all(MYSQLI_ASSOC);



// $res = array(
//         'data' =>array_slice ($row,($pageNo-1)*$qty,$qty),
//         'qty' =>$qty,
//         'total' =>count($row)
//     );
// echo json_encode($res);

$result->free(); //释放内存
$conn -> close();
// 关闭数据库，避免资源浪费
echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>
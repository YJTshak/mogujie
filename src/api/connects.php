<?php

        $servername = 'localhost';
        $username = 'root';
        $password = '';
        $dbname = '1804';


        $conn = new mysqli($servername, $username, $password, $dbname);

        var_dump($conn);
        if($conn->connect_error){
            die('链接失败:' . $conn->connect_error);
        }



?>
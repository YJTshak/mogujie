<?php

      include 'connects.php';


      $username = isset($_GET['username']) ? $_GET['username'] : null;


      $sql = "select * from username where name='$username'";


      $result = $conn->query($sql);

      var_dump($result);
      if($result->num_rows>0){
        echo "No";
      }else{
        echo 'Yes';
      }  



?>
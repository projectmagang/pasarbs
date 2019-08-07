<?php
    include_once("config.php");
    try{
        $stmt   = $pdo->query("Select * from kurir where id_user='1203494940'");
        while   ($row = $stmt->fetch(PDO::FETCH_OBJ)){
            $data[] = $row;
        }
        echo json_encode($data);
    }catch(PDOException $e){
        echo $e->getMessage();
    }
?>
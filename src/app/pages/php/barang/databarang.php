<?php
    include_once("config.php");
    try{
        $stmt   = $pdo->query("Select * from barang ");
        while   ($row = $stmt->fetch(PDO::FETCH_OBJ)){
            $data[] = $row;
        }
        echo json_encode($data);
    }catch(PDOException $e){
        echo $e->getMessage();
    }
?>
<?php

  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  header("Content-Type: application/json; charset=utf-8");

  include "library/config.php";
  
  $postjson = json_decode(file_get_contents('php://input'), true);
  $today    = date('Y-m-d');



   if($postjson['aksi']=="login"){
    $query = mysqli_query($mysqli, "SELECT * FROM user WHERE username='$postjson[username]' AND password='$postjson[password]'");
    $check = mysqli_num_rows($query);

    if($check>0){
      $data = mysqli_fetch_array($query);
      $datauser = array(
        'username' => $data['username'],
        'password' => $data['password']
      );
	  $result = json_encode(array('success'=>true, 'result'=>$datauser));

    }else{
      $result = json_encode(array('success'=>false, 'msg'=>'Unregister Account'));
    }

    echo $result;
  }

  elseif($postjson['aksi']=="register"){
    $query = mysqli_query($mysqli, "INSERT INTO user SET
      username = '$postjson[username]',
      password = '$postjson[password]',
	  nik = '$postjson[nik]',
	  nama = '$postjson[nama]',
	  alamat = '$postjson[alamat]',
	  kota = '$postjson[kota]',
	  kode_pos = '$postjson[kode_pos]',
	  jenis_kelamin = '$postjson[jenis_kelamin]',
	  tempat_lahir = '$postjson[tempat_lahir]',
	  tanggal_lahir = '$postjson[tanggal_lahir]',
	  kontak = '$postjson[kontak]',
	  role_id = '1',
	  foto = 'avatar.png'
    ");

    if($query) $result = json_encode(array('success'=>true));
    else $result = json_encode(array('success'=>false, 'msg'=>'error, please try again'));

    echo $result;
  }
  // Test
  /*  elseif($postjson['aksi']=='getdata'){
  	$data = array();
  	$query = mysqli_query($mysqli, "SELECT * FROM barang");

  	while($row = mysqli_fetch_array($query)){

  		$data[] = array(
  			'id' => $row['id'],
  			'nama' => $row['nama'],
			'id_toko' => $row['id_toko'],
			'kategori' => $row['kategori'],
  			'stok' => $row['stok'],
  			'harga' => $row['harga'],
			'kondisi' => $row['kondisi'],
			'satuan' => $row['satuan'],
			'gambar' => $row['gambar'],

  		);
  	}

  	if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
  	else $result = json_encode(array('success'=>false));

  	echo $result;

  }
*/

?>
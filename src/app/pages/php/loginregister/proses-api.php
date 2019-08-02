<?php

  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  header("Content-Type: application/json; charset=utf-8");

  include "library/config.php";
  
  $postjson = json_decode(file_get_contents('php://input'), true);
  $today    = date('Y-m-d');


// tabel user
//-------------------------------------------------------------------------------------------------
   if($postjson['aksi']=="login"){
    $query = mysqli_query($mysqli, "SELECT * FROM user WHERE username='$postjson[username]' AND password='$postjson[password]'");
    $check = mysqli_num_rows($query);

    if($check>0){
      $data = mysqli_fetch_array($query);
      $datauser = array(
        'role_id' =>$data['role_id'],
	  'nik' =>$data['nik'],
        'username' => $data['username'],
        'password' => $data['password']
      );
	  $result = json_encode(array('success'=>true, 'result'=>$datauser));

    }else{
      $result = json_encode(array('success'=>false, 'msg'=>'Unregister Account'));
    }

    echo $result;
  }
    //------------------------------------------------------------------------------------
  // Tabel user // register
//--------------------------------------------------------------------------------------
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
  //------------------------------------------------------------------------------------
  // Tabel Kurir
//--------------------------------------------------------------------------------------
    elseif($postjson['aksi']=="registerkurir"){
    $query = mysqli_query($mysqli, "INSERT INTO kurir SET
      id_kurir = '$postjson[id_kurir]',
      id_toko = '5',
	  id_user = '$postjson[id_user]',
	  nama = '$postjson[nama]',
	  kendaraan = '$postjson[kendaraan]',
	  nopol = '$postjson[nopol]'
    ");

    if($query) $result = json_encode(array('success'=>true));
    else $result = json_encode(array('success'=>false, 'msg'=>'Coba Lagi'));

    echo $result;
  }
   //------------------------------------------------------------------------------------
  // Tabel Barang tampil barang
//--------------------------------------------------------------------------------------
  elseif($postjson['aksi']=='getdata'){
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
      //------------------------------------------------------------------------------------
  // Tabel barang // hapus
//--------------------------------------------------------------------------------------
    elseif($postjson['aksi']=='hapusbarang'){
  	$query = mysqli_query($mysqli, "DELETE FROM barang WHERE id='$postjson[id]'");

  	if($query) $result = json_encode(array('success'=>true, 'result'=>'success'));
  	else $result = json_encode(array('success'=>false, 'result'=>'error'));

  	echo $result;

  }
    //------------------------------------------------------------------------------------
  // Tabel barang // input
//--------------------------------------------------------------------------------------
  else if($postjson['aksi']=='inputbarang'){

  	$query = mysqli_query($mysqli, "INSERT INTO barang SET
  		nama = '$postjson[nama]',
  		id_toko = 'T-001',
		kategori = '$postjson[kategori]',
		stok = '$postjson[stok]',
		harga = '$postjson[harga]',
		kondisi = '$postjson[kondisi]',
		satuan = '$postjson[satuan]',
		gambar = '$postjson[gambar]'
		
  		
  	");

  	$idcust = mysqli_insert_id($mysqli);

  	if($query) $result = json_encode(array('success'=>true, 'customerid'=>$idcust));
  	else $result = json_encode(array('success'=>false));

  	echo $result;

  }
    //------------------------------------------------------------------------------------
  // Tabel barang // Update 
//--------------------------------------------------------------------------------------

  elseif($postjson['aksi']=='updateproduk'){
  	$query = mysqli_query($mysqli, "UPDATE barang SET 
  	nama = '$postjson[nama]',
		kategori = '$postjson[kategori]',
		stok = '$postjson[stok]',
		harga = '$postjson[harga]',
		kondisi = '$postjson[kondisi]',
		satuan = '$postjson[satuan]',
		gambar = '$postjson[gambar]',
    id='$postjson[id]' WHERE id='$postjson[id]'");

  	if($query) $result = json_encode(array('success'=>true, 'result'=>'success'));
  	else $result = json_encode(array('success'=>false, 'result'=>'error'));

  	echo $result;

  }
    //------------------------------------------------------------------------------------
  // Tabel toko
//--------------------------------------------------------------------------------------
   elseif($postjson['aksi']=="registertoko"){
    $query = mysqli_query($mysqli, "INSERT INTO toko SET
     
    id_toko = '$postjson[id_toko]',
    id_user = '$postjson[id_user]',
    nama_toko = '$postjson[nama_toko]',
    alamat_toko = '$postjson[alamat_toko]',
    kota = '$postjson[kota]',
    kode_pos = '$postjson[kode_pos]',
    kontak = '$postjson[kontak]',
    keterangan = '$postjson[keterangan]',
    logo = 'tos.jpg'
    ");

    if($query) $result = json_encode(array('success'=>true));
    else $result = json_encode(array('success'=>false, 'msg'=>'error, please try again'));

    echo $result;
  }

?>
	
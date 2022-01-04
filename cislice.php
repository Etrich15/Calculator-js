<?php

require_once "config.php";

$json = file_get_contents("php://input");
$data = json_decode($json);
$cislice = $data->cislice;

$db = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
mysqli_query($db, "
    UPDATE 3ep_kalkulacka
    SET pocet = pocet + 1
    WHERE cislice = '$cislice'
");
mysqli_close($db);


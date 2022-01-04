<?php

require_once "config.php";

$db = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
$data = mysqli_query($db, "
    SELECT cislice, pocet FROM 3ep_kalkulacka
");
mysqli_close($db);

$odpoved = [];

foreach($data as $zaznam)
{
    $odpoved[] = array(
        "cislice" => $zaznam["cislice"],
        "pocet" => $zaznam["pocet"],
    );
}

echo json_encode($odpoved);


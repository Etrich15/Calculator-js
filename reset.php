<?php

require_once "config.php";

$db = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
mysqli_query($db, "
    DROP TABLE 3ep_kalkulacka;
");
mysqli_query($db, "
    CREATE TABLE 3ep_kalkulacka (
        id      int(11) NOT NULL,
        cislice int(11) NOT NULL,
        pocet   int(11) DEFAULT '0'
    );
");
mysqli_query($db, "
    ALTER TABLE 3ep_kalkulacka
        ADD PRIMARY KEY (id),
        ADD UNIQUE KEY cislice (cislice),
        MODIFY id int(11) NOT NULL AUTO_INCREMENT;
");
mysqli_query($db, "
    INSERT INTO 3ep_kalkulacka (cislice)
        VALUES (0), (1), (2), (3), (4), (5), (6), (7), (8), (9);
");
mysqli_close($db);


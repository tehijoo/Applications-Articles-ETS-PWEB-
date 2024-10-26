<?php

$nrp = array("0001", "0002", "0003", "0004", "0005");
$nama = array("Adi", "Budi", "Cici", "Dini", "Eko");

echo "<table border='2'>";

echo "<tr><th>No</th><th>NRP</th><th>Nama</th></tr>";

for ($i = 0; $i < sizeof($nrp); $i++) {
    echo "<tr>"; 
    echo "<td>" . ($i + 1) . "</td>";  // Penomoran
    echo "<td>" . $nrp[$i] . "</td>";
    echo "<td>" . $nama[$i] . "</td>";
    echo "</tr>";
}

echo "</table>";

?>
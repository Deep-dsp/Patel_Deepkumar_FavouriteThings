<?php
    // include the file we just wrote - connect
    // include("connect.php"); // like a JS import statement

    $result = array();

    function getAllUsers($conn)
    {
        $query = "SELECT * FROM animals";

        $runQuery = $conn->query($query);

        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        //return $result;
        echo(json_encode($result));
    }

    function getSingleUser($conn, $id)
    {
        $query = "SELECT * FROM animals WHERE id=" . $id . "";

        $runQuery = $conn->query($query);

        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        //return $result;
        echo(json_encode($result));
    }

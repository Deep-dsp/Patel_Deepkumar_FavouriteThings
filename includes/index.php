<?php
    include("connect.php");
    include("functions.php");

    // if we need one piece, run getOne function

    // else get all the pieces.
    if(isset($_GET["id"])){
        // get one item data from databae - whichever one we cliked onand asked for in the UI
        $targetID = $_GET["id"];
        $result = getSingleUser($pdo, $targetID);

        return $result;
    }
    else{
        // user want to see all the data items from database
        $allusers = getAllUsers($pdo);
        return $allusers;
    }
?>
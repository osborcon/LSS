<!DOCTYPE html>
<html>

<head>
        <title>PHP Test</title>
</head>

<body>

        <?php
        $dbServername = "vwh-host-db01d.its.iastate.edu";
        $dbUsername = "centralstores_loginsystem";
        $dbPassword = "XWX7S64ZzK5tdHD";
        $dbName = "centralstores_loginsystem";

        $conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);
        // Check connection
        if (!$conn) {
                die("Connection failed: " . mysqli_connect_error());
        }
        echo "Connected successfully";
        
        $sql = "SELECT * FROM users;";
        $result = mysqli_query($conn, $sql);
        $resultCheck = mysqli_num_rows($result);

        if ($resultCheck > 0){
                while ($row = mysqli_fetch_assoc($result)){
                        echo $row['user_first'];
                }
        }
        

        ?>


</body>

</html>
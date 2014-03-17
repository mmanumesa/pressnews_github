

<?php
function get_conexion() {
    
 define( "DB_SERVER",    getenv('OPENSHIFT_MYSQL_DB_HOST') );
 
 define( "DB_USER",      getenv('OPENSHIFT_MYSQL_DB_USERNAME') );
 
 define( "DB_PASSWORD",  getenv('OPENSHIFT_MYSQL_DB_PASSWORD') );
 
 define( "DB_DATABASE",  getenv('OPENSHIFT_APP_NAME') );
 
 
 $con = mysql_connect(DB_SERVER,DB_USER,DB_PASSWORD) or die(mysql_error());
 $con2 = mysql_select_db(DB_DATABASE) or die(mysql_error());
 
 echo "con" .$con ."<br>";
 echo "con2". $con2 ."<br>";
 $q = "select * from categories";
 
 $result =  mysqli_query($con, $q) or die(mysql_error());
 
 while ($row = mysql_fetch_array($result))
         {
                 echo "<br>".$row[0];
                 echo $row[1];
                 echo $row[2];
         }
mysql_close();

}


echo get_conexion();


?>
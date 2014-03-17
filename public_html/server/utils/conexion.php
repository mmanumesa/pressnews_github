<?php

function get_conexion() {

 define( "DB_SERVER",    getenv('OPENSHIFT_MYSQL_DB_HOST') );
 
 define( "DB_USER",      getenv('OPENSHIFT_MYSQL_DB_USERNAME') );
 
 define( "DB_PASSWORD",  getenv('OPENSHIFT_MYSQL_DB_PASSWORD') );
 
 define( "DB_DATABASE",  getenv('OPENSHIFT_APP_NAME') );
 
 
 $con = mysql_connect(DB_SERVER,DB_USER,DB_PASSWORD) or die(mysql_error());
 $con2 = mysql_select_db(DB_DATABASE) or die(mysql_error());
 
    if (!$con)
        die('<br>Error en la conexion: ' . mysql_error() . "<br>");
    return($con);
}

?>
<?php

require_once("../class/user_class.php");
require_once("../class/categories_class.php");
require_once("../utils/conexion.php");

function insert_user($mail, $id, $password) {
    $con = get_conexion();

    $sql = "INSERT INTO user_data (mail, id_activation, password) VALUES ('$mail','$id', '$password');";
    $insert = mysql_query( $sql);
    if (!$insert)
        return false;
    else
        return true;
}

function check_active_user($id_activate) {
    $user_class = new user_class();
    $con = get_conexion();

    $sql = "SELECT * from user_data where id_activation ='$id_activate';";
    $resp = mysql_query( $sql);
    if (!$resp)
        die('<br>Consulta no válida: ' . mysql_error() . "<br>");
    else {
        $row = $resp->fetch_assoc();
        $user_class->setMail($row['mail']);
        $user_class->setIdActivate($row['id_activation']);
        $user_class->setPassword($row['password']);
        $user_class->setName($row['name']);
        $user_class->setSubname($row['subname']);
        $user_class->setPhone($row['phone']);
        $user_class->setMobile($row['mobilephone']);
    }
    return($user_class);
}

function update_id_activate($mail) {
    $con = get_conexion();

    $sql = "UPDATE user_data set id_activation='activate' where mail ='$mail';";
    $resp = mysql_query( $sql);
    return $resp;
}

function check_user($mail) {

    $user_class = new user_class();
    $con = get_conexion();

    $sql = "SELECT * from user_data where mail ='$mail'";
    $resp = mysql_query( $sql);

    if (!$resp)
        die('<br>Consulta no válida: ' . mysql_error() . "<br>");
    else {
        $row = mysql_fetch_array($resp);
        $user_class->setMail($row['mail']);
        $user_class->setIdActivate($row['id_activation']);
        $user_class->setPassword($row['password']);
        $user_class->setName($row['name']);
        $user_class->setSubname($row['subname']);
        $user_class->setPhone($row['phone']);
        $user_class->setMobile($row['mobilephone']);
    }
    return($user_class);
}

function update_user($mail, $password, $name, $subname, $phone, $mobilephone) {
    $con = get_conexion();

    $sql = "UPDATE user_data set password='$password', name='$name', subname='$subname', phone='$phone', mobilephone='$mobilephone' where mail ='$mail';";
    $resp = mysql_query( $sql);
    return $resp;
}

function count_categorie_user($id_categorie, $mail) {
    $con = get_conexion();

    $sql = "select count(*) from user_data_categories where id_categories = " . $id_categorie . " and mail_user_data = '$mail';";
    $result = mysql_query( $sql);
    $row = mysql_fetch_array($result);
    return $row[0];
}

function delete_categorie_user($id_categorie, $mail) {
    $con = get_conexion();

    $sql = "DELETE FROM user_data_categories WHERE id_categories='$id_categorie' and mail_user_data = '$mail'  ;";
    $result = mysql_query($sql);
    if (!$result)
        return false;
    else
        return true;
}

function add_user_categorie($id_categorie, $mail) {
    $con = get_conexion();

    $sql = "INSERT INTO user_data_categories (mail_user_data , id_categories) VALUES ('$mail','$id_categorie');";
    $result = mysql_query( $sql);

    if (!$result)
        return false;
    else
        return true;
}

function search_user_categorie($mail) {
    $user_class = new user_class();
    $con = get_conexion();

    $sql = "SELECT * from user_data_categories where mail_user_data ='$mail' order by id_categories;";
    $result = mysql_query($sql);

    if (!$result)
        die('<br>Consulta no válida: ' . mysql_error() . "<br>");
    else {
        return($result);
    }
}

function search_categories_dao($mail) {

    $con = get_conexion();
    $sql = "SELECT categories.id, categories.name_categorie, categories.link_rss from categories join user_data_categories
where user_data_categories.mail_user_data ='$mail' and user_data_categories.id_categories = categories.id order by id_categories;";

    $result = mysql_query($sql);

    $array_categories = array();
    $i = 0;

    while ($row = mysql_fetch_array($result)) {
        array_push($array_categories, $row);
    }

    return($array_categories);

    if (!$result)
        die('<br>Consulta no válida: ' . mysql_error() . "<br>");
    else {
        return($result);
    }
}

function get_all_user() {

    $con = get_conexion();
    $sql = "SELECT mail from user_data";
    $result = mysql_query($sql);


    $array_categories = array();
    $i = 0;

 while ($row = mysql_fetch_array($result)){
        array_push($array_categories, $row);
    }

    return($array_categories);

    if (!$result)
        die('<br>Consulta no válida: ' . mysql_error() . "<br>");
    else {
        return($result);
    }
}

function add_share($mail, $link, $mailShare) {
    $con = get_conexion();

    $sql = "INSERT INTO news_share_user (mail, link, mailToShare) VALUES ('$mail','$link', '$mailShare');";
    $insert = mysql_query( $sql);
    if (!$insert)
        return false;
    else
        return true;
}

function get_news_share_dao($mail) {

    $con = get_conexion();
    $sql = "SELECT mail, link from news_share_user where mailToShare ='$mail' order by id_share desc;";
    $result = mysql_query($sql);

    $array_categories = array();
    $i = 0;

     while ($row = mysql_fetch_array($result)) {
        array_push($array_categories, $row);
    }

    return($array_categories);

    if (!$result)
        die('<br>Consulta no válida: ' . mysql_error() . "<br>");
    else {
        return($result);
    }
}
?>
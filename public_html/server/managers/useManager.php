<?php

require_once("../dao/userDAO.php");
require_once("../class/user_class.php");
require_once("../utils/send_mail.php");

function insert_manager($mail_register, $password) {
    if (filter_var($mail_register, FILTER_VALIDATE_EMAIL)) {
        $user_class = new user_class ();
        $user_class = check_user($mail_register);
        if ($user_class->getMail() == "") {
            $code = sha1(mt_rand() . time() . mt_rand() . $_SERVER['REMOTE_ADDR']);
            $result = insert_user($mail_register, $code, $password);
            if ($result) {
                echo json_encode(array("state" => 0));
                
                $asunto = "Confirm your account of PressToNews";
                
                $cuerpo = 'Hola, para activar tu cuenta haz click en el siguiente link:
                ' . "\n" . '
                <a href="http://localhost/Netbeans_proyect/proyecto_iris/public_html/active.html?code=' . $code . '">http://localhost/Netbeans_proyect/proyecto_iris/public_html/active.html?code=' . $code . '</a>
                O copia el siguiente link en la barra de direcciones de tu navegador:
                ' . "\n" . '
                http://localhost/Netbeans_proyect/proyecto_iris/public_html/active.html?code=' . $code;

                /*if (!send_mail($mail_register, $cuerpo, $asunto))
                    echo "Error en phpmailer";*/
            }
            else
                echo "Error en el insert";
        }
        else if ($user_class->getIdActivate() == "activate")
            echo json_encode(array("state" => 1));
        else
            echo json_encode(array("state" => 2));
    }
    else
        echo json_encode(array("state" => 3));
}

function active_manager($id_register) {
    $user_class = new user_class();
    $user_class = check_active_user($id_register);
    if ($user_class->getMail() != "") {
        if ($user_class->getIdActivate() != "activate") {
            update_id_activate($user_class->getMail());
            echo json_encode(array("state" => true));
        }
        else
            echo json_encode(array("state" => false));
    }
    else
        echo json_encode(array("state" => false));
}

function login_manager($id_register, $password) {
    $user_class = new user_class();
    $user_class = check_user($id_register);
    
    if ($user_class->getMail() != "") {
        if ($user_class->getPassword() == $password) {
            if ($user_class->getIdActivate() == "activate") {
                session_start();
                $_SESSION["usuario_online"] = $user_class;
                search_user_categorie_manager($user_class->getMail());

                echo json_encode(array("state" => 0));
            }
            else
                echo json_encode(array("state" => 1));
        }
        else
            echo json_encode(array("state" => 2));
    }
    else
        echo json_encode(array("state" => 3));
}

function search_user_categorie_manager($mail) {
    $result = search_user_categorie($mail);
    $categories = array();
    while ($row = mysql_fetch_array($result)) {
        array_push($categories, $row["id_categories"]);
    }
    $_SESSION["categories_user"] = $categories;
}

function update_dates($mail, $password, $name, $subname, $phone, $mobilephone) {
    $resp = update_user($mail, $password, $name, $subname, $phone, $mobilephone);
    if ($resp) {
        session_start();
        $user_class = check_user($mail);
        $_SESSION["usuario_online"] = $user_class;
        echo json_encode(array("state" => true));
    }
    else
        echo json_encode(array("state" => false));
}

function search_categories($mail) {
    $categories = search_categories_dao($mail);
    $lenght = sizeof($categories);
    echo json_encode(array("categories" => $categories, "size" => $lenght));
}

function add_categorie_user($id_categorie, $mail) {
    if (count_categorie_user($id_categorie, $mail) == 0) {
        if (add_user_categorie($id_categorie, $mail))
            echo json_encode(array("state" => 0));
        else
            echo json_encode(array("state" => 1));
    }
    else {
        if (delete_categorie_user($id_categorie, $mail))
            echo json_encode(array("state" => 0));
        else
            echo json_encode(array("state" => 2));
    }
}

function all_user() {
    $get_all_user = get_all_user();
    $lenght = sizeof($get_all_user);
    echo json_encode(array("AllUser" => $get_all_user, "size" => $lenght));
}

function add_news_share($mail, $link, $mailShare) {
        if (add_share($mail, $link, $mailShare))
            echo json_encode(array("state" => 0));
        else
            echo json_encode(array("state" => 1));

}

function get_news_share($mail_share) {
    $get_news_share = get_news_share_dao($mail_share);
    $lenght = sizeof($get_news_share);

        echo json_encode(array("share" => $get_news_share, "size" => $lenght));
}

?>



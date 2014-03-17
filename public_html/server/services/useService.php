<?php

require_once("../lib/toro.php");
require_once("../dao/userDAO.php");
require_once("../class/user_class.php");
require_once("../managers/useManager.php");
require_once("router.php");

class insert {

    function post() {
        $result = insert_manager($_POST['mail'], $_POST['password']);
    }

}

class sign_in {

    function post() {
        $result = login_manager($_POST['mail'], $_POST['password']);
    }

}

class update_dates {

    function post() {
        $result = update_dates($_POST['mail'], $_POST['password'], $_POST['name'], $_POST['subname'], $_POST['phone'], $_POST['mobilephone']);
    }

}

class active_account {

    function post() {
        $result = active_manager($_POST['code']);
    }

}

class search_session {

    function post() {
        session_start();
        if (isset($_SESSION["usuario_online"])) {
            echo json_encode(array("state" => true));
        } else {
            echo json_encode(array("state" => false));
        }
    }

}

class close_session {

    function post() {
        session_start();
        session_destroy();
        $parametros_cookies = session_get_cookie_params();
        setcookie(session_name(), 0, 1, $parametros_cookies["path"]);
    }

}

class session_data {

    function post() {
        session_start();
        if (isset($_SESSION["usuario_online"])) {
            $user_class = new user_class();
            $user_class = $_SESSION["usuario_online"];
            echo json_encode(array("mail" => $user_class->getMail(), "name" => $user_class->getName(), "subname" => $user_class->getSubname(), "phone" => $user_class->getphone(), "mobile" => $user_class->getMobile(), "password" => $user_class->getPassword()));
        }
        else
            echo json_encode(array("state" => false));
    }

}

class session_data_categorie_user {

    function post() {
        session_start();
        if (isset($_SESSION["categories_user"])) {
            $result = $_SESSION["categories_user"];
            $lenght = sizeof($result);
            echo json_encode(array("categories" => $result, "size" => $lenght));
        }
    }

}

class search_categories {

    function post() {
        session_start();
        if (isset($_SESSION["usuario_online"])) {
            $user_class = new user_class();
            $user_class = $_SESSION["usuario_online"];
            $result = search_categories($user_class->getMail());
        }
    }

}

class add_categorie_user {

    function post() {
        session_start();
        if (isset($_SESSION["usuario_online"])) {
            $user_class = new user_class();
            $user_class = $_SESSION["usuario_online"];
            $result = add_categorie_user($_POST['id_categorie'], $user_class->getMail());
            search_user_categorie_manager($user_class->getMail());
        }
    }

}

class search_user {

    function post() {
        $result = all_user();
    }

}

class add_news_share {

    function post() {
        $result = add_news_share($_POST['mail'], $_POST['link'], $_POST['mail_share']);
        $mail_share = $_POST['mail_share'];
        $asunto = "PressToNews - Han compartido una noticia contigo";
        $cuerpo = 'El usuario ' . $_POST['mail'] . ', a compartido una noticia contigo.
                ' . "\n" . '
                <a href="' . $_POST['link'] . '">' . $_POST['link'] . '</a>
                O copia el siguiente link en la barra de direcciones de tu navegador:
                ' . "\n" . $_POST['link'];

       /* send_mail($mail_share, $cuerpo, $asunto);*/
    }

}

class get_news_share {

    function post() {
        $result = get_news_share($_POST['mail_share']);
    }

}

class send_mail_help {

    function post() {
        send_mail("mmanumesa@gmail.com", $_POST['cuerpo'], $_POST['asunto']);
    }

}

class base {

    function get() {
        echo "base get";
    }

    function post() {
        echo "base post";
    }

}
?>


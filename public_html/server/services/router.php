<?php

header('Content-Type: application/json');

ToroHook::add("404", function() {
            header('HTTP/1.0 404 Not Found');
            echo "Error";
        });

Toro::serve(array(
    "/" => "base",
    "/insert" => "insert",
    "/sign_in" => "sign_in",
    "/active_account" => "active_account",
    "/search_session" => "search_session",
    "/close_session" => "close_session",
    "/update_dates" => "update_dates",
    "/add_categorie_user" => "add_categorie_user",
    "/search_categories" => "search_categories",
    "/session_data_categorie_user" => "session_data_categorie_user",
    "/session_data" => "session_data",
    "/add_news_share" => "add_news_share",
    "/get_news_share" => "get_news_share",
    "/send_mail_help" => "send_mail_help",
    "/search_user" => "search_user"
));
?>


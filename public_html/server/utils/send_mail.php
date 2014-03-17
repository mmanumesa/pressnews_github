<?php

require "../lib/PHPMailerAutoload.php";
include("../lib/class.phpmailer.php");
include("../lib/class.smtp.php");

function send_mail($mail_register, $cuerpo, $asunto) {
    $mail = new PHPMailer();

    $mail->IsSMTP();
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = "ssl";
    $mail->Host = "smtp.gmail.com";
    $mail->Port = 465;
    $mail->Username = "presstonews@gmail.com";
    $mail->Password = "presstonews12345";


    $mail->From = "presstonews@gmail.com";
    $mail->FromName = "PressToNews";

    $mail->addAddress($mail_register);
    $mail->WordWrap = 50;
    $mail->isHTML(true);
    $mail->Subject = $asunto;
    $mail->Body = $cuerpo;
    $mail->AltBody = "This is the body in plain text for non-HTML mail clients";

    if (!$mail->send()) {
        echo "Message could not be sent.";
        echo "Mailer Error: " . $mail->ErrorInfo;
        return false;
    }
    return true;
}
?>
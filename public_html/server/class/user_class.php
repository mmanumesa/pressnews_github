<?php

class user_class {

    private $mail;
    private $id_activate;
    private $name;
    private $phone;
    private $mobile_phone;
    private $password;
    private $subname;

    function user_class() {
        $mail = "";
        $id_activate = "";
        $name = "";
        $subname = "";
        $phone = "";
        $mobile_phone = "";
        $password = "";
    }

    function user_class_1($mail, $id_activate, $name, $subname, $phone, $mobile, $password) {
        $this->mail = $mail;
        $this->id_activate = $id_activate;
        $this->name = $name;
        $this->subname = $subname;
        $this->phone = $phone;
        $this->mobile_phone = $mobile;
        $this->password = $password;
    }

    function setMail($mail) {
        $this->mail = $mail;
    }

    function setIdActivate($id_activate) {
        $this->id_activate = $id_activate;
    }

    function setName($name) {
        $this->name = $name;
    }

    function setSubname($subname) {
        $this->subname = $subname;
    }

    function setPhone($phone) {
        $this->phone = $phone;
    }

    function setMobile($mobile) {
        $this->mobile_phone = $mobile;
    }

    function setPassword($password) {
        $this->password = $password;
    }

    function getMail() {
        return $this->mail;
    }

    function getIdActivate() {
        return $this->id_activate;
    }

    function getName() {
        return $this->name;
    }

    function getSubname() {
        return $this->subname;
    }

    function getphone() {
        return $this->phone;
    }

    function getMobile() {
        return $this->mobile_phone;
    }

    function getPassword() {
        return $this->password;
    }

}
?>


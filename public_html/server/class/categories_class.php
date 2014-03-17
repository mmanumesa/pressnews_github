<?php

class categories_class {

    private $id;
    private $name;
    private $rss;

    function categories_class() {
        $this->id = "";
        $this->name = "";
        $this->rss = "";
    }

    function categories_class_1($id, $name, $rss) {
        $this->id = $id;
        $this->name = $name;
        $this->rss = $rss;
    }

    function setId($id) {
        $this->id = $id;
    }

    function setName($name) {
        $this->name = $name;
    }

    function setRss($rss) {
        $this->rss = $rss;
    }

    function getId() {
        return $this->id;
    }

    function getName() {
        return $this->name;
    }

    function getRss() {
        return $this->rss = $rss;
    }

}
?>


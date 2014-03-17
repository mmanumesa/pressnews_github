
iris.ui(function(self) {

    self.create = function() {

        self.tmplMode(self.APPEND);
        self.tmpl(iris.path.ui.alertUi.html);
        var mail = self.setting("mail");
        mail = "" + mail + " a compartido una noticia contigo.";
        var link = self.setting("link");
        self.inflate({text: mail, link:link});
    };


    self.awake = function() {

    };

}, iris.path.ui.alertUi.js);

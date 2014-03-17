
iris.ui(function(self) {
    var user = new Array();
    self.create = function() {

        self.tmplMode(self.APPEND);
        self.tmpl(iris.path.ui.modal_shareUi.html);


        var link = self.setting("link");
        console.log("value: " + link);
        self.inflate({link: link});
    };


    self.awake = function() {
        self.get("share").on("click", function() {
            search_users(function(data) {
                var exist = false;
                for (var i = 0; i < data.size; i++) {
                    if (data.AllUser[i].mail === self.get("mail_share").val()) {
                        exist = true;
                    }
                }
                
                if (exist) {
                    session_data(function(data){
                        add_share(data.mail, self.get("link").val(), self.get("mail_share").val(), function(data){
                            if(data.state === 0){
                                self.get("close").click();
                                alert("Noticia compartida.");
                            }
                        });
                    });
                }
                else {
                    self.get("mail_share").val("");
                }
            });
        });
    };

}, iris.path.ui.modal_shareUi.js);

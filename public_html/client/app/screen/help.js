iris.screen(
        function(self) {
            self.create = function() {
                self.tmpl(iris.path.screen.help.html);
                console.log("Help Screen Created");

                self.get("button_help").on("click", function(e) {
                    var asunto = self.get("asunto").val().trim();
                    var cuerpo = self.get("cuerpo").val().trim();

                    if (asunto != "" && cuerpo != "") {
                        send_mail_help(cuerpo, asunto);
                        alert("Mensaje enviado.");
                        self.get("asunto").val("");
                        self.get("cuerpo").val("");
                    }
                    else {
                        alert("No se puede enviar una consulta sin asunto o cuerpo.");
                    }
                });

            };
            self.awake = function() {
                $("#menu-close").trigger('click');
                console.log("Help Screen Awakened");
            };

            self.sleep = function() {
                console.log("Help Screen Asleep");
            };

            self.destroy = function() {
                console.log("Help Screen Destroyed");
            };
        },
        iris.path.screen.help.js
        );

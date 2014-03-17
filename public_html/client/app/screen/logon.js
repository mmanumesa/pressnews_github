iris.screen(
        function(self) {

            self.create = function() {
                console.log("Logon Screen Created");
                self.tmpl(iris.path.screen.logon.html);


                self.get("register").on("click", function(e) {
                    if (valida_pass($('#password').val())) {
                        register(function(data) {
                            if (data.state === 0) {
                                $("#mail").val("");
                                $("#password").val("");
                                alert("Usuario registrado correctamente, active su cuenta a traves de su email.");
                            } else if (data.state === 1) {
                                $("#mail").val("");
                                $("#password").val("");
                                alert("Usuario ya registrado.");
                            } else if (data.state === 2) {
                                $("#mail").val("");
                                $("#password").val("");
                                alert("Active la cuenta a traves de su correo electronico.");
                            } else if (data.state === 3) {
                                $("#mail").val("");
                                $("#password").val("");
                                alert("Formato de email incorrecto.");
                            }
                        });
                    } else {
                        $("#mail").val("");
                        $("#password").val("");
                        alert("Contraseña demasiado debil.");
                    }
                }
                );


                self.get("sign_in").on("click", function(e) {
                    sign_in(function(data) {
                        if (data.state === 0) {
                            iris.presstonews.check_log = true;
                            iris.navigate("#/login");
                            
                        } else if (data.state === 1) {
                            $("#mail").val("");
                            $("#password").val("");
                            alert("Cuenta pendiente de confirmar.");
                        } else if (data.state === 2 || data.state === 3) {
                            $("#mail").val("");
                            $("#password").val("");
                            alert("Contraseña o mail incorrecto.");
                        }
                    });

                });

            };

            self.awake = function(params) {

                console.log("Logon Screen Awakened- " + iris.presstonews.check_log);

            };

            self.sleep = function() {
                console.log("Logon Screen Asleep");
            };

            self.destroy = function() {
                console.log("Logon Screen Destroyed");//Never called
            };
        },
        iris.path.screen.logon.js
        );


iris.screen(
        function(self) {
            self.create = function() {
                self.tmpl(iris.path.screen.aditional_info.html);
                console.log("aditional_info Screen Created");

                $("#update_aditional_info").click(function() {
                    exist = true;

                    if (mobile.length > 0)
                    {

                        if (EsTelefonoMovil(mobile) == false) {
                            exist = false;
                            console.log("entra mobile");
                        }
                    }

                    if (phone.length > 0)
                    {
                        if (EsTelefonoFijo(phone) == false) {
                            exist = false;
                            console.log("entra phone");
                        }
                    }

                    if (valida_pass(pas1) == false) {
                        exist = false;
                        console.log("entra pass1");

                    }

                    if (pas1 !== pas2) {
                        exist = false;
                        console.log("entra pass2");
                    }

                    if (exist) {
                        update_info(mail, name, subname, mobile, phone, pas1, function(data) {
                            if (data.state == true) {
                                alert("Cambios realizados correctamente.");
                            }
                            else {
                                alert("Fallo al realizados correctamente.");
                            }
                        });
                    }
                    else {
                        alert("Ha introducido algun dato erroneo.");
                    }

                });

            };

            self.awake = function() {
                console.log("aditional_info Screen Awakened");
                $("#menu-close").trigger('click');
                session_data(function(data) {
                    self.inflate({data: data});
                });
            };

            self.sleep = function() {
                console.log("aditional_info Screen Asleep");
            };
            self.destroy = function() {
                console.log("aditional_info Screen Destroyed");
            };
        },
        iris.path.screen.aditional_info.js
        );
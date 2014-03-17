iris.screen(
        function(self) {
            self.create = function() {
                self.tmpl(iris.path.screen.welcome.html);
                console.log("Welcome Screen Created");

                self.screens("screens_main", [
                    ["logon", iris.path.screen.logon.js],
                    ["login", iris.path.screen.login.js]
                ]);
            };

            self.awake = function() {
                console.log("Welcome Screen Awakened");
                if (self.param("do")) {
                    iris.navigate("#/logon/");
                    close_session();
                }
                else {
                    search_session(function(data) {
                        if (data.state) {
                            iris.navigate("#/login/news/rss");
                        }
                        else {
                            iris.navigate("#/logon/");
                        }
                    })
                }
            };

            self.sleep = function() {
                console.log("Welcome Screen Asleep"); //Never called
            };

            self.destroy = function() {
                console.log("Welcome Screen Destroyed");//Never called
            };

        }, iris.path.screen.welcome.js);
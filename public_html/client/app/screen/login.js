iris.screen(
        function(self) {

            self.create = function() {
                console.log("login Screen Created");
                self.tmpl(iris.path.screen.login.html);
                self.screens("screens", [
                    ["welcome", iris.path.screen.welcome.js],
                    ["news/:categorie", iris.path.screen.news.js],
                    ["extended_news/:code/:categorie", iris.path.screen.extended_news.js],
                    ["aditional_info", iris.path.screen.aditional_info.js],
                    ["choose_categories", iris.path.screen.choose_categories.js],
                    ["help", iris.path.screen.help.js]
                ]);

            };

            self.awake = function() {

                console.log("Login Screen Awakened");
                
                $("#menu-close").trigger('click');

                console.log(iris.presstonews.check_log);
                if (iris.presstonews.check_log) {
                    search_categories();
                    iris.navigate("#/login/news/rss");
                }
                else {
                    window.location.href = "#/logon";
                }

                self.get("alert").on("click", function(e) {
                    self.destroyUIs("li_alert");
                    session_data(function(data) {
                        console.log(data.mail)
                        get_news_share(data.mail, function(data) {
                            for (var i = 0; i < data.size; i++) {
                                self.ui("li_alert", iris.path.ui.alertUi.js, {mail: data.share[i].mail, link: data.share[i].link});
                                self.inflate({text: i});
                            }
                        });
                    });
                });
            };

            self.sleep = function() {
                console.log("login Screen Asleep"); //Never called
            };

            self.destroy = function() {
                console.log("login Screen Destroyed");//Never called
            };

        },
        iris.path.screen.login.js
        );

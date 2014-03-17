iris.screen(
        function(self) {
            self.create = function() {
                self.tmpl(iris.path.screen.choose_categories.html);
                console.log("choose_categories Screen Created");
                load_categories();
                check_cheked();
            };
            self.awake = function() {
                load_categories();
                check_cheked();
                $("#menu-close").trigger('click');
                console.log("choose_categories Screen Awakened");
            };

            self.sleep = function() {
                console.log("choose_categories Screen Asleep");
            };

            self.destroy = function() {
                console.log("choose_categories Screen Destroyed");
            };

            function load_categories() {
                $("#div_categorias").remove();
                var i = 1;
                var div_categorias = $("<div id='div_categorias'></div>");

                while (i < 16) {
                    var categories = new Array("internacional", "nacional", "economia", "deportes", "motor", "viajes", "tecnologia", "artes", "salud", "libros", "cine", "television", "empleo", "vivienda", "musica");

                    var div_categoria = $("<div id='div_categoria' class = 'col-lg-6 col-md-6 col-sm-6 col-xs-12'></div>");
                    var div_label = $("<div id='div_label' class = 'col-lg-10 col-md-10 col-sm-9 col-xs-10'><label>" + categories[i - 1] + "</label></div>");
                    var div_imagen_label = $("<div id='div_imagen_label' class= 'col-lg-2 col-md-2 col-sm-2 col-xs-2'><img src= 'img/" + categories[i - 1] + ".png'></div>");
                    var div_imagen = $("<div id='div_imagen'></div>").addClass("col-lg-8 col-md-8 col-sm-8 col-xs-8");

                    var div_botones = $("<div id='div_botones'></div>").addClass("col-lg-4 col-md-4 col-sm-4 col-xs-4");
                    var div_onoffswitch = $("<div data-id = " + i + "></div>").addClass("onoffswitch");

                    var input_onoffswitch = $("<input type='checkbox' name='onoffswitch' data-id='" + i + "' id='" + i + "'></input>").addClass("onoffswitch-checkbox");
                    input_onoffswitch.on("click", function() {
                        add_categorie_user($(this).attr("data-id") , function (data){
                            if(data) search_categories();
                        });
                    });

                    var label = $("<label for='" + i + "'><div class='onoffswitch-inner'></div><div class='onoffswitch-switch'></div></label>").addClass("onoffswitch-label");

                    div_imagen.append(div_imagen_label);
                    div_imagen.append(div_label);


                    div_onoffswitch.append(input_onoffswitch);
                    div_onoffswitch.append(label);

                    div_botones.append(div_onoffswitch);

                    div_categoria.append(div_imagen);
                    div_categoria.append(div_botones);
                    $(div_categorias).append(div_categoria);
                    i++;
                }
                $("#choose_categories").append(div_categorias);
            }

            function check_cheked() {
                data = session_data_categorie_user(function(data) {
                    for (var x = 0; x < data.size; x++) {
                        $("#" + data.categories[x]).attr('checked', 'checked');
                    }
                });

            }

        }, iris.path.screen.choose_categories.js
        );

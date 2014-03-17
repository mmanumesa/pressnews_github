iris.screen(
        function(self) {
            self.create = function() {
                self.tmpl(iris.path.screen.extended_news.html);
                console.log("extended_news Screen Created");
            };
            self.awake = function(params) {
                console.log("extended_news Screen Awakened");

                $("#news_1").remove();
                $("#url_share").remove();

                if (params.categorie == "rss") {
                    news_col_12_rss(parseInt(params.code) + 1, parseInt(params.code) - 1);
                }
                else {
                    news_col_12(parseInt(params.code) + 1, parseInt(params.code) - 1, params.categorie);
                }

                self.get("button_share").on("click", function() {
                    self.destroyUIs("modal");
                    var link = $("#url_share2").attr("href");
                    self.ui("modal", iris.path.ui.modal_shareUi.js, {link: link});
                });
            };

            self.sleep = function() {
                console.log("extended_news Screen Asleep");
            };

            self.destroy = function() {
                console.log("extended_news Screen Destroyed");
            };

            function news_col_12(limit_max, limit_min, categorie) {
                jQuery(function() {

                    $("#new").rss("http://www.20minutos.es/rss/" + categorie + "/", {
                        limit: limit_max,
                        effect: 'slideFast',
                        layoutTemplate: '<div id = "news_1">{entries}</div>',
                        entryTemplate: '<div id="noticia" class="box">\n\
<div id="tittle" class="col-md-10 col-md-offset-1"><h3>{title}</h3></div>\n\
<div id="imagen" class="col-md-10 col-md-offset-1"><a id="url_share2" data-id="url_share2" href="{url}" target="_blank">Ir a la fuente</a><img class="img-responsive img-full" src="{teaserImageUrl}"></div>\n\
<div id="cuerpo" class="col-md-10 col-md-offset-1"><p><br><input data-id="url_share" id="url_share" type="hidden" value="{url}"><br>{bodyPlain}</p></div><div class="clearfix"></div></div>',
                        filter: function(entry, token) {
                            return token.index > limit_min;
                        }
                    })
                })
            }

            function news_col_12_rss(limit_max, limit_min) {
                jQuery(function() {

                    $("#new").rss("http://www.20minutos.es/rss/", {
                        limit: limit_max,
                        effect: 'slideFast',
                        layoutTemplate: '<div id = "news_1">{entries}</div>',
                        entryTemplate: '<div id="noticia" class="box">\n\
<div id="tittle" class="col-md-10 col-md-offset-1"><h3>{title}</h3></div>\n\
<div id="imagen" class="col-md-10 col-md-offset-1"><a id="url_share2" data-id="url_share2" href="{url}" target="_blank">Ir a la fuente</a><img class="img-responsive img-full" src="{teaserImageUrl}"></div>\n\
<div id="cuerpo" class="col-md-10 col-md-offset-1"><p><br><input data-id="url_share" type="hidden" value="{url}"><br>{bodyPlain}</p></div><div class="clearfix"></div></div>',
                        filter: function(entry, token) {
                            return token.index > limit_min;
                        }
                    })
                })
            }

        },
        iris.path.screen.extended_news.js
        );


iris.screen(
        function(self) {
            self.create = function() {
                self.tmpl(iris.path.screen.news.html);
                console.log("news Screen Created");
            };

            self.awake = function(params) {
                $("#menu-close").trigger('click');
                if (iris.presstonews.check_log) {
                    $("#news_12").remove();
                    $("#news_4").remove();

                    if (params.categorie == "rss")
                    {
                        noticia_col_12_rss(1, -1);
                        noticia_col_4_rss(7, 0);
                    }

                    else {
                        noticia_col_12(1, -1, params.categorie);
                        noticia_col_4(7, 0, params.categorie);
                    }
                }
                else {
                    window.location.href = "#/logon";
                }
            }
            self.sleep = function() {
                console.log("news Screen Asleep");
            };

            self.destroy = function() {
                console.log("news Screen Destroyed");
            };

            function noticia_col_12(limit_max, limit_min, categorie) {
                self.get("news_12").rss("http://www.20minutos.es/rss/" + categorie + "/", {
                    limit: limit_max,
                    effect: 'slideFast',
                    layoutTemplate: '<div id = "news_12">{entries}</div>',
                    entryTemplate: '<div id="noticia" data-index="{index}" class="box"><div id="imagen" class="col-md-6"><img class="img-responsive img-border-left" src="{teaserImageUrl}"></div><div id="cuerpo" class="col-md-6"><h3>{title}<small><a href="#/login/extended_news/{index}/' + categorie + '">&nbsp&nbspleer mas...</a></small></h3><p>{shortBodyPlain}</p></div><div class="clearfix"></div></div>',
                    filter: function(entry, token) {
                        return token.index > limit_min;
                    }
                });
            }

            function noticia_col_12_rss(limit_max, limit_min) {
                self.get("news_12").rss("http://www.20minutos.es/rss/", {
                    limit: limit_max,
                    effect: 'slideFast',
                    layoutTemplate: '<div id = "news_12">{entries}</div>',
                    entryTemplate: '<div id="noticia" data-index="{index}" class="box"><div id="imagen" class="col-md-6"><img class="img-responsive img-border-left" src="{teaserImageUrl}"></div><div id="cuerpo" class="col-md-6"><h3>{title}<small><a href="#/login/extended_news/{index}/rss">&nbsp&nbspleer mas...</a></small></h3><p>{shortBodyPlain}</p></div><div class="clearfix"></div></div>',
                    filter: function(entry, token) {
                        return token.index > limit_min;
                    }
                });
            }


            function noticia_col_4(limit_max, limit_min, categorie) {
                self.get("news_4").rss("http://www.20minutos.es/rss/" + categorie + "/", {
                    limit: limit_max,
                    effect: 'slideFast',
                    layoutTemplate: '<div id = "news_4">{entries}</div>',
                    entryTemplate: '<div id="noticia" data-index="{index}" class="box col-sm-4 text-center" style="min-height:480px;"><div id="imagen"><img class="img-responsive img-border-left" src="{teaserImageUrl}"></div><div id="cuerpo" class="col-md-12"><h4>{title}.<small><a href="#/login/extended_news/{index}/' + categorie + '">&nbsp&nbspleer mas...</a></small></h4><p>{shortBodyPlain}</p></div><div class="clearfix"></div></div>',
                    filter: function(entry, token) {
                        return token.index > limit_min;
                    }
                });
            }
            
            function noticia_col_4_rss(limit_max, limit_min) {
                self.get("news_4").rss("http://www.20minutos.es/rss/", {
                    limit: limit_max,
                    effect: 'slideFast',
                    layoutTemplate: '<div id = "news_4">{entries}</div>',
                    entryTemplate: '<div id="noticia" data-index="{index}" class="box col-sm-4 text-center" style="min-height:480px;"><div id="imagen"><img class="img-responsive img-border-left" src="{teaserImageUrl}"></div><div id="cuerpo" class="col-md-12"><h4>{title}.<small><a href="#/login/extended_news/{index}/rss">&nbsp&nbspleer mas...</a></small></h4><p>{shortBodyPlain}</p></div><div class="clearfix"></div></div>',
                    filter: function(entry, token) {
                        return token.index > limit_min;
                    }
                });
            }
        },
        iris.path.screen.news.js
        );

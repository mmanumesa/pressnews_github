$(window.document).ready(function() {
    iris.presstonews = {
        check_log: false,
    };

    search_session(function(data) {
        iris.presstonews.check_log = data.state;
    })
    
    iris.baseUri('./');

    iris.welcome(iris.path.screen.welcome.js);
});

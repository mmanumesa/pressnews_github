iris.screen(
    function (self) {
        self.create = function () {   
            self.tmpl(iris.path.screen.active.html);
            console.log("active Screen Created");
        };
        self.awake = function () {   
            console.log("active Screen Awakened");
        };

        self.sleep = function () {
            console.log("active Screen Asleep");
        };

        self.destroy = function () {
            console.log("active Screen Destroyed");
        };
    },
    iris.path.screen.active.js
);

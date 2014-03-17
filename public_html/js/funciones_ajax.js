function active(code, callback) {
    $.ajax({
        type: 'POST',
        url: 'server/services/useService.php/active_account',
        dataType: 'json',
        data: {code: code}
    }).done(function(data) {
        callback(data);
    }).fail(function() {
        console.log("error", arguments);
    });
}

function sign_in(callback) {
    iris.ajax({
        type: 'POST',
        url: 'server/services/useService.php/sign_in',
        dataType: 'json',
        data: {mail: $('#mail').val(), password: $('#password').val()}
    }).done(function(data) {
        console.log(data);
        callback(data);

    }).fail(function() {
        console.log("error", arguments);
    });
}

function register(callback) {
    if (valida_pass($('#password').val())) {
        iris.ajax({
            type: 'POST',
            url: 'server/services/useService.php/insert',
            dataType: 'json',
            data: {mail: $('#mail').val(), password: $('#password').val()}
        }).done(function(data) {
            callback(data);
        }).fail(function() {
            console.log("error", arguments);
        });
    }
}

function update_info(mail, name, subname, mobile, phone, pass, callback) {
    iris.ajax({
        type: 'POST',
        url: 'server/services/useService.php/update_dates',
        dataType: 'json',
        data: {mail: mail, password: pass, name: name, subname: subname, phone: phone, mobilephone: mobile}
    }).done(function(data) {
        callback(data);
    }
    ).fail(function() {
        console.log("error", arguments);
    });
}

function session_data(callback) {
    $.ajax({
        type: 'POST',
        url: 'server/services/useService.php/session_data',
        dataType: 'json',
    }).done(function(data) {
        callback(data);
    }).fail(function() {
        console.log("error", arguments);
    });
}

function add_categorie_user(id_categorie, callback) {
    iris.ajax({
        type: 'POST',
        url: 'server/services/useService.php/add_categorie_user',
        dataType: 'json',
        data: {id_categorie: id_categorie}
    }).done(function(data) {
        callback(true);

    }).fail(function() {
        console.log("error", arguments);
    });
}

function search_session(callback) {
    $.ajax({
        type: 'POST',
        url: 'server/services/useService.php/search_session',
        dataType: 'json',
    }).done(function(data) {
        callback(data);
    }).fail(function() {
        console.log("error", arguments);
        callback(promise);
    });
}

function session_data_categorie_user(callback) {
    $.ajax({
        type: 'POST',
        url: 'server/services/useService.php/session_data_categorie_user',
        dataType: 'json',
    }).done(function(data) {
        callback(data);
    }).fail(function() {
        console.log("error", arguments);
    });
}

function close_session() {
    $.ajax({
        type: 'POST',
        url: 'server/services/useService.php/close_session',
        dataType: 'text',
    }).done(function(data) {
        iris.presstonews.check_log = false;
        window.location = "http://pressnews-pressnews.rhcloud.com/";
    }).fail(function() {
        console.log("error", arguments);
    });
}

function search_categories() {
    $.ajax({
        type: 'POST',
        url: 'server/services/useService.php/search_categories',
        dataType: 'json',
    }).done(function(data) {
        $("#div_li_categories").remove();
        var div_categories = $("<div id = 'div_li_categories'></div>");
        for (var i = 0; i < data.size; i++) {
            var li_aditional_info = $("<li><a href='#/login/news/" + data.categories[i][1] + "'>" + data.categories[i][1] + "</a></li>");
            div_categories.append(li_aditional_info);
        }
        $("#data_categories").append(div_categories);
    }).fail(function() {
        console.log("error", arguments);
    });
}

function search_users(callback) {
    $.ajax({
        type: 'POST',
        url: 'server/services/useService.php/search_user',
        dataType: 'json',
    }).done(function(data) {
        callback(data);
    }).fail(function() {
        console.log("error", arguments);
    });
}

function add_share(mail, link, mailShare, callback) {
    iris.ajax({
        type: 'POST',
        url: 'server/services/useService.php/add_news_share',
        dataType: 'json',
        data: {mail: mail, link: link, mail_share: mailShare}
    }).done(function(data) {
        callback(data);
    }).fail(function() {
        console.log("error", arguments);
    });
}

function get_news_share(mail_share, callback) {
    $.ajax({
        type: 'POST',
        url: 'server/services/useService.php/get_news_share',
        dataType: 'json',
        data: {mail_share: mail_share}
    }).done(function(data) {
        callback(data);
    }).fail(function() {
        console.log("error", arguments);
    });
}

function send_mail_help(cuerpo, asunto) {
    $.ajax({
        type: 'POST',
        url: 'server/services/useService.php/send_mail_help',
        dataType: 'json',
        data: {cuerpo: cuerpo, asunto: asunto}
    }).done(function(data) {
        callback(data);
    }).fail(function() {
        console.log("error", arguments);
    });
}
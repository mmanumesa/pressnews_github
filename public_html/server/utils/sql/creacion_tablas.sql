create database if not exists presstonews;
use presstonews;

    create table categories(
    id INT(100),
    name_categorie VARCHAR(100),
    link_rss VARCHAR(100),
    PRIMARY KEY(id)
    );

    create table user_data(
    mail VARCHAR(100),
    id_activation VARCHAR(200),
    password varchar(20),
    name VARCHAR(100),
    subname VARCHAR(100),
    phone VARCHAR(9),
    mobilephone VARCHAR(9),
    primary key (mail)
    );

    CREATE TABLE user_data_categories(
    mail_user_data varchar(100) not null,
    id_categories int (100) not null,
    FOREIGN KEY (mail_user_data) REFERENCES user_data(mail),
    FOREIGN KEY (id_categories) REFERENCES categories(id)
    );

      create table news_share_user(
id_share  int (10)   NOT NULL AUTO_INCREMENT ,
    mail varchar(100),
    link varchar(300),
    mailToShare varchar (100),
    PRIMARY KEY (id_share),
    FOREIGN KEY (mail) REFERENCES user_data(mail),
    FOREIGN KEY (mailToShare) REFERENCES user_data(mail)
    );

    insert into categories  (id, name_categorie, link_rss) values (1 , "internacional" , "http://www.20minutos.es/rss/internacional/");
    insert into categories  (id, name_categorie, link_rss) values (2 , "nacional" , "http://www.20minutos.es/rss/nacional/");
    insert into categories  (id, name_categorie, link_rss) values (3 , "economia" , "http://www.20minutos.es/rss/economia/");
    insert into categories  (id, name_categorie, link_rss) values (4 , "deportes" , "http://www.20minutos.es/rss/deportes/");
    insert into categories  (id, name_categorie, link_rss) values (5 , "motor" , "http://www.20minutos.es/rss/motor/");
    insert into categories  (id, name_categorie, link_rss) values (6 , "viajes" , "http://www.20minutos.es/rss/viajes/");
    insert into categories  (id, name_categorie, link_rss) values (7 , "tecnologia" , "http://www.20minutos.es/rss/tecnologia/");
    insert into categories  (id, name_categorie, link_rss) values (8 , "artes" , "http://www.20minutos.es/rss/artes/");
    insert into categories  (id, name_categorie, link_rss) values (9 , "salud" , "http://www.20minutos.es/rss/salud/");
    insert into categories  (id, name_categorie, link_rss) values (10 , "libros" , "http://www.20minutos.es/rss/libros/");
    insert into categories  (id, name_categorie, link_rss) values (11 , "cine" , "http://www.20minutos.es/rss/cine/");
    insert into categories  (id, name_categorie, link_rss) values (12 , "television" , "http://www.20minutos.es/rss/gente-television/");
    insert into categories  (id, name_categorie, link_rss) values (13 , "empleo" , "http://www.20minutos.es/rss/empleo/");
    insert into categories  (id, name_categorie, link_rss) values (14 , "vivienda" , "http://www.20minutos.es/rss/vivienda/");
    insert into categories  (id, name_categorie, link_rss) values (15 , "musica" , "http://www.20minutos.es/rss/musica/");
    insert into categories  (id, name_categorie, link_rss) values (16 , "portada" , "http://www.20minutos.es/rss/");



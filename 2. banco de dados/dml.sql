create database SuperHerois;
use SuperHerois;

create table tb_super_heroi (
	id_super_heroi    INT primary key,
	nm_super_heroi       varchar(100),
	ds_super_poder      varchar(200),
	bt_voa          boolean
);

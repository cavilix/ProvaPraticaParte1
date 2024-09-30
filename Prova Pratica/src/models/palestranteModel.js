import conn from "../config/conn";

const tabelaPalestrante = /*sql*/`
create table if not exists palestrantes(
    palestrantes_id varchar() primary key,
    nome varchar(255) not null,
    especializacao varchar(255) not null,
    email varchar(255) not null,
    telefone varchar(255) not null,
    created_at timestamp default value current_timestamp,
    updated_at timestamp default value current_timestamp on update current_timestamp
)`
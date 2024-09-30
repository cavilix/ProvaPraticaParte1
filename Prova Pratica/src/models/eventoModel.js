import conn from "../config/conn";

const tabelaEvento = /*sql*/`
create table if not exists eventos(
    evento_id varchar() primary key,
    nome_evento varchar(255) not null,
    localizacao varchar(255) not null,
    created_at timestamp default value current_timestamp,
    updated_at timestamp default value current_timestamp on update current_timestamp
)`
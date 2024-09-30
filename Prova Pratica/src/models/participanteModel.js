import conn from "../config/conn";

const tabelaParticipante = /*sql*/`
create table if not exists participantes(
    participante_id varchar() primary key,
    nome varchar(255) not null,
    email varchar(255) not null,
    telefone varchar(255) not null,
    created_at timestamp default value current_timestamp,
    updated_at timestamp default value current_timestamp on update current_timestamp
)`
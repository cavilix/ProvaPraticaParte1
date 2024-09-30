import conn from "../config/conn"
import bcrypt from "bcrypt"
import {v4 as uuidv4} from 'uuid';
import jwt from "jsonwebtoken"


export const register = (request, response) => {

        const id= uuidv4()

        const insertSql = /*sql*/ `INSERT INTO usuarios
            (??, ??, ??) VALUES (?, ?, ?)
        `
        const insertData = ["usuario_id", "nome", "expertise",
        id, nome, expertise]

        conn.query(insertSql, insertData, (err) => {
            if(err){
                console.error(err)
                response.status(500).json({err: "Erro ao cadastrar usuário"})
            }
            const usuarioSql = /*sql*/ `SELECT * FROM usuarios WHERE ?? = ?`
            const usuarioData = ["usuario_id", id]
            conn.query(usuarioSql, usuarioData, async (err, data) => {
                if(err){
                    console.error(err)
                    response.status(500).json({err: "Erro ao selecionar o usuário"})
                    return
                }
                const usuario = data[0]
                try {
                  await createUserToken(usuario, request, response)
                } catch (error){
                    console.error(error)
                }
            })
        })
    }
    export const getPalestrantes = (request, response) => {

        const checkSql = /*sql*/ `
            SELECT nome FROM palestrantes WHERE ?? = ?
        `
        conn.query(checkSql, (err, data) => {
            if(err){
                console.error(err)
                response.status(500).json({err: "Erro ao buscar usuário"})
                return
            }
            if(data.length === 0){
                response.status(404).json({err: "palestrante não encontrado"})
                return
            }
            const palestrante = data[0]
            response.status(200).json(palestrante)
        })
    }
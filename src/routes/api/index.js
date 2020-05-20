const Router = require('express').Router();

const usuariosRouter = require('./usuarios');
const authRouter = require('./auth');


const endpoints = {
    message: 'essa é a API da nossa rede social',
    endpoints: {
        usuarios: {
            caminho: '/usuarios'
        },
        autenticacao: {
            caminho: '/auth'
        }
    }
};

Router.get('/', (req, res, next) => res.json(endpoints));
Router.use('/usuarios', usuariosRouter);
Router.use('/auth', authRouter);

module.exports = Router;

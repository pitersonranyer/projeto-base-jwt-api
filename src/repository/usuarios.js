const Usuario = require('../model/usuario');    
const { gerarCredenciais } = require('../service/auth');

const cadastrarUsuario = dadosUsuario => {
    return Usuario.findOne({ where: { email: dadosUsuario.email } }).then(data => {

        if (data === null ) {
            const credenciais = gerarCredenciais(dadosUsuario.senha);   
            const usuario = new Usuario({ ...dadosUsuario, ...credenciais });
            
            usuario.save();
            return true;
            
        } else {
            return false;
        }

        
    });
};

module.exports = { cadastrarUsuario };

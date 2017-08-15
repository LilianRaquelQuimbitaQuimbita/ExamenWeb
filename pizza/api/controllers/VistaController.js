module.exports = {
    login: function (req, res) {
        var parametros = req.allParams();
        if (parametros.correo && parametros.password) {
            Usuario.findOne({ correo: parametros.correo })
                .exec(function (err, usuarioEncontrado) {
                if (err)
                    return res.negotiate(err);
                if (!usuarioEncontrado) {
                    return res.serverError('El usuario no existe');
                }
                else {
                    if (parametros.password == usuarioEncontrado.password) {
                        console.log("Estas logeado");
                        return res.redirect('/seleccionarPizza');
                    }
                    else {
                        return res.redirect('/');
                    }
                }
            });
        }
        else {
            sails.log('Usuario eliminado');
            return res.view('Oculto/loginAdm');
        }
    },
    listarPizzas: function (req, res) {
        var parametros = req.allParams();
        sails.log.info("Parametros", parametros);
        Pizza
            .find()
            .exec(function (err, pizzas) {
            if (err)
                return res.negotiate(err);
            else {
                return res.view('InterfazPizza/Pizza', {
                    pizzas: pizzas
                });
            }
        });
    },
    comprarPizza: function (req, res) {
        return res.ok('Pizza Comprada');
    }
};

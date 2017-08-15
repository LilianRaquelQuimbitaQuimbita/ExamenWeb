/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
 // para crear usuario
  //http://localhost:1337/Usuario/create?nombreUsuario=Lilian&correo=lilian.quimbita@epn.edu.ec&password=123
  attributes: {
    nombreUsuario:{
      type:'string'
    },
    correo:{
      type:'email'
    },
    password:{
      type:'string'
    },
    pizzas:{
      collection:'Pizza',
      via:'idPizza'
    }

  }
};


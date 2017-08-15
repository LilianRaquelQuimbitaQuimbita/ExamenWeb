/**
 * Pizza.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombrePizza:{
      type:'string'
    },
    adereso1:{
      type:'string'
    },
    adereso2:{
      type:'string'
    },
    adereso3:{
      type:'string'
    },
    precio:{
      type:'string'
    },
    imagen:{
      type:'string'
    },

    idPizza: {
      model: 'Usuario',
      required: false
    }
  }
};


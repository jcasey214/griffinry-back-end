var knex = require('../db/knex');

function Resources(){
  return knex('resources')
};

module.exports = {

  getResourceList: function(Rarity_Type){
    return Resources().select().where('Rarity', Rarity_Type)
  }

}

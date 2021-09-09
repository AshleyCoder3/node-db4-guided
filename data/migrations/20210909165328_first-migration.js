
exports.up = async function(knex) {
  await knex.schema
    .createTable('zoos', table => {
      
    })
    .createTable('species', table => {
      
    })
    .createTable('animals', table => {
      
    })
    .createTable('zoo_animals', table => {
      
    })
};

exports.down = async function(knex) {
  // SO FREAKIN' EASY TO GET WRONG
  await knex.schema
    .dropTableIfExists('zoo_animals')
    .dropTableIfExists('animals')
    .dropTableIfExists('species')
    .dropTableIfExists('zoos')
};

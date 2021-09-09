
exports.up = async function(knex) {
  await knex.schema
    .createTable('zoos')
    .createTable('species')
    .createTable('animals')
    .createTable('zoo_animals')
};

exports.down = async function(knex) {
  // SO FREAKIN' EASY TO GET WRONG
  await knex.schema
    .dropTableIfExists('zoo_animals')
    .dropTableIfExists('animals')
    .dropTableIfExists('species')
    .dropTableIfExists('zoos')
};

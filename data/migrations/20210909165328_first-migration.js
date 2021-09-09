
exports.up = async function(knex) {
  await knex.schema
    .createTable('zoos', table => {
      table.increments('zoo_id')
      table.string('zoo_name', 128).notNullable()
      table.address('address', 255).notNullable().unique()
    })
    .createTable('species', table => {
      table.increments('species_id')
      table.string('species_name', 350).notNullable()
    })
    .createTable('animals', table => {
      table.increments('animal_id')
      table.string('animal_name', 150).notNullable()
      table.integer('')
    })
    .createTable('zoo_animals', table => {
      table.increments('zoo_animal_id')
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

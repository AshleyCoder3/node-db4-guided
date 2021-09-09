
exports.up = async function (knex) {
    await knex.schema
        .createTable('zoos', table => {
            table.increments('zoo_id');
            table.string('zoo_name', 128).notNullable();
            table.string('address', 255).notNullable().unique();
        })

        .createTable('species', table => {
            table.increments('species_id');
            table.string('species_name', 350).notNullable();
        })

        .createTable('animals', table => {// need ^ table to use
            table.increments('animal_id');
            table.string('animal_name', 150).notNullable();
            table.integer('species_id')
                .unsigned()//no negative numbers
                .notNullable()
                .references('species_id')// what were getting from other table
                .inTable('species') //table we're getting it from
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT');
        })

        .createTable('zoo_animals', table => {// need upper table to work
            table.increments('zoo_id');
            table.timestamps(true, true); //creates columns for time stamps
            table.integer('animals_id')
                .unsigned()//no negative numbers
                .notNullable()
                .references('animals_id')// what were getting from other table
                .inTable('animals') //table we're getting it from
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT');
            table.integer('zoo_id')
                .unsigned()
                .notNullable()
                .references('zoo_id')
                .inTable('zoos')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT');


        });
};

exports.down = async function (knex) {
    await knex.schema
        // opposite order of making
        .dropTableIfExists('zoo_animals')
        .dropTableIfExists('animals')
        .dropTableIfExists('species')
        .dropTableIfExists('zoos');
};

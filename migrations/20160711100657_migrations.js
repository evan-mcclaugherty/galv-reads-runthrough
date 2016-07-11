exports.up = function(knex, Promise) {
    return knex.schema.createTable('staff', function(table) {
        table.increments();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('staff');
};

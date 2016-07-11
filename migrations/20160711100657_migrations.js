exports.up = function(knex, Promise) {
    return knex.schema.createTable('students', function(table) {
        table.increments();
        table.string('name').notNullable();
        table.string('username').notNullable().unique();
        table.string('password').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('students');
};

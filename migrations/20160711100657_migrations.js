exports.up = function(knex, Promise) {
<<<<<<< HEAD
    return knex.schema.createTable('students', function(table) {
        table.increments();
        table.string('name').notNullable();
        table.string('username').notNullable().unique();
        table.string('password').notNullable();
=======
    return knex.schema.createTable('staff', function(table) {
        table.increments();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
>>>>>>> list-staff
    })
};

exports.down = function(knex, Promise) {
<<<<<<< HEAD
    return knex.schema.dropTable('students');
=======
    return knex.schema.dropTableIfExists('staff');
>>>>>>> list-staff
};

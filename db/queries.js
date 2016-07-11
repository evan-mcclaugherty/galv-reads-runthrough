var knex = require('./databaseConnection');
module.exports = {
    listStaff: function() {
        console.log("HELLOOOOO");
        return knex('staff').select();
    },
    addStaff: function(staff) {
        return knex('staff').insert(staff);
    },
    getStaff: function(id) {
        return knex('staff').select().where('id', id).first();
    },
    removeStaff: function(id) {
        return knex('staff').del().where('id', id);
    }
}

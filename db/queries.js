var knex = require('./databaseConnection');
module.exports = {
    listStaff: function() {
        console.log("HELLOOOOO");
        return knex('staff').select();
    },
    addStaff: function(staff) {
        return knex('staff').insert(staff);
    }
}

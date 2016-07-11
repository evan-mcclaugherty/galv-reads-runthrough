exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('table_name').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('students').insert({
                    id: 1,
                    colName: 'rowValue1'
                }),
                knex('students').insert({
                    id: 2,
                    colName: 'rowValue2'
                }),
                knex('students').insert({
                    id: 3,
                    colName: 'rowValue3'
                })
            ]);
        });
};

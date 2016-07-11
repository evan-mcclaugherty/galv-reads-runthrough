exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('staff').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('staff').insert({
                    first_name: 'Kyle',
                    last_name: "Coberly"
                }),
                knex('staff').insert({
                    first_name: 'Roberto',
                    last_name: 'Ortega'
                }),
                knex('staff').insert({
                    first_name: 'Elana',
                    last_name: 'Kopelevich'
                })
            ]);
        });
};

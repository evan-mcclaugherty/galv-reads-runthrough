var express = require('express');
var router = express.Router();
var api = require('../db/api');
/* GET users listing. */
router.get('/', function(req, res, next) {
    var staff = api.queries.listStaff().then(function(staff) {
        res.render(
            "list-staff", {
                staff: staff
            }
        );
    });
});

router.get('/new', function(req, res, next) {
    res.render('add-staff');
});

router.post('/', function(req, res, next) {
    var staff = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    }
    api.queries.addStaff(staff).then(function() {
        res.redirect('/staff');
    });
})

router.get('/delete/:id', function(req, res, next) {
    api.queries.getStaff(req.params.id).then(function(staff) {
        res.render('delete-staff', {
            staff: staff
        });
    });
})
module.exports = router;

var express = require('express');
var router = express.Router();
var api = require('../db/api');
console.log(api.queries);
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

module.exports = router;

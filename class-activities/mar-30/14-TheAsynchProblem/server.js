var orm = require("./config/orm.js");

orm.selectWhere("parties", "party_type", "grown-up", function (data) {
    console.log(data);
});

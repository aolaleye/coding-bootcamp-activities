var orm = require("./config/orm.js");

orm.selectFrom("party_name", "parties");

orm.selectFrom("client_name", "clients");

orm.selectWhere("parties", "party_type", "grown-up");

orm.leftJoin("*", "clients", "parties", "id", "client_id");

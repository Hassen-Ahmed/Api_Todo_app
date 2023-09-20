const mongoose = require("mongoose");

require("dotenv").config({ path: `${__dirname}/../.env.development` });

mongoose.connect(`${process.env.MONGODB_URL}`);

module.exports = mongoose.connection;

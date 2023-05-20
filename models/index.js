const Sequelize = require("sequelize");
const db = {};

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "C:\\Users\\GopAL\\Desktop\\backEnd\\sequelize24\\db24\\sqllite24.db"
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;



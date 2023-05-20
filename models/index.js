const Sequelize = require("sequelize");
const db = {};

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "C:\\Users\\GopAL\\Desktop\\backEnd\\sequelize24\\db24\\sqllite24.db"
});

sequelize.authenticate()
.then(result => {
    console.log(`SQLite successfully connected!`);
    console.log(`tables created`);
})
.catch(error => {
    console.error('Unable to connect to SQLite database:', error);
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Sequelize refers to the library itself 
// sequelize refers to an instance of Sequelize, which represents a connection to one database

module.exports = db.sequelize;

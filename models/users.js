const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "C:\\Users\\GopAL\\Desktop\\backEnd\\sequelize24\\db24\\sqllite24.db"
});

// APPROACH I
const user = sequelize.define("user", {
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING },
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    favoriteColor: { type: DataTypes.TEXT, defaultValue: 'green' },
    age: DataTypes.INTEGER,
    cash: DataTypes.INTEGER,
    // status:DataTypes.BOOLEAN,
}, { timestamps: false });

user.sync();
module.exports = user;


/*********************************************************************************************/
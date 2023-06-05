const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "C:\\Users\\GopAL\\Desktop\\backEnd\\sequelize24\\db24\\sqllite24.db"
});

class User extends Model { }
User.init({    
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING }
}, {
    sequelize,                  // pass the connection instance here
    modelName: 'User',           // choose the model name
    freezeTableName: true,       // table name will be equal to model name without any modifications
    tableName: 'Employees'          // provide table name directly
});

// the defined model is the class itself
console.log(User === sequelize.models.User);            // true
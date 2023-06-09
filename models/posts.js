const {Sequelize, DataTypes} = require("sequelize");
// const Sequelize = require('./index').sequelize; 
// const sequelize = new Sequelize("sqlite::memory:");
// const sequelize = new Sequelize({
//     dialect: "sqlite",
//     storage: "C:\\Users\\GopAL\\Desktop\\backEnd\\sequelize24\\db24\\sqllite24.db"
// });
const sequelize = require('./index')
const BlogPost = sequelize.define("post", {
    isPublished: DataTypes.BOOLEAN,
    title : DataTypes.STRING,
    author : DataTypes.NUMBER,
    timestamp: DataTypes.BIGINT,
    publishedDate : DataTypes.BIGINT,
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
}, {timestamps : false});

BlogPost.sync();

module.exports = BlogPost;

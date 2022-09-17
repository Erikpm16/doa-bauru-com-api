const { Sequelize, DataTypes } = require('sequelize');


const database = new Sequelize('sqlite:./db.sqlite');

const User = database.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(100),
        validate: {
            notEmpty: true,
        }
    },
    email: { 
        type: DataTypes.STRING, 
        unique: true,       
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },
    password: DataTypes.STRING(100),
}, {});

const Client = database.define('client', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: true,
        }
    },
    email: { 
        type: DataTypes.STRING, 
        unique: true,       
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },
    password: DataTypes.STRING(100),
    telephone: {
        type: DataTypes.SMALLINT,       
        allowNull: false,
        validate: {
            notEmpty: true,
            isInt: true,
        }
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    district: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    complement: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    zipcode: {
        type: DataTypes.SMALLINT,       
        allowNull: false,
        validate: {
            notEmpty: true,
            isInt: true,
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    site: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
});

module.exports = { database, User, Client };
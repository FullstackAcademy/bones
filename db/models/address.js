'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Address = db.define('address', {
    street: {
        type: Sequelize.STRING,
        allowNull: false
    },
    apartment: {
        type: Sequelize.STRING,
        notEmpty: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    country: {
        type: Sequelize.STRING,
        allowNull: false
    },
    zip: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    getterMethods: {
        fullAddress: function() {
            return this.street + "\n" + (this.apartment? this.apartment+"\n":"") + this.city + ", " + this.state + " " + this.zip + "\n" + this.country;
        }
    }
});

module.exports = Address;

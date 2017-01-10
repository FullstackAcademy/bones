'use strict';

const Sequelize = require('sequelize')
const db = require('APP/db')

const Event = db.define('events', {
	name: { 
		type: Sequelize.STRING,
		allowNull: false
	},
	description: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	date: {
		type:Sequelize.DATE,
		allowNull: false
	},
	location: {
		type: Sequelize.STRING,
		allowNull: false
	},
	training: {
		type: Sequelize.ARRAY(Sequelize.STRING)
	},
	image: {
		type: Sequelize.STRING
	},
	numNeeded: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	urgent: {
		type: Sequelize.BOOLEAN, 
		defaultValue: false
	},
	category: {
		type: Sequelize.ARRAY(Sequelize.STRING)
	},
	active: {
		type: Sequelize.BOOLEAN,
		defaultValue: true
	}

})

module.exports = Item

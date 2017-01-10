/* eslint-disable no-unused-expressions, no-unused-vars, new-cap */
const Sequelize = require('sequelize')
const db = require('APP/db')

// NOTE: we should think  wikistack model and routes
// since it is same functionality
const Review = db.define('reviews', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  },
  numStars: {
	  type: Sequelize.ENUM(1, 2, 3, 4, 5),
	  allowNull: false
  },
  datePosted: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
},
// methods?
{
  hooks: {
	  //
  },
  getterMethods: {
    //
  },

  setterMethods: {
    //
  },

  classMethods: {
	  //
  },

  instanceMethods: {
    //
  }

});

module.exports = Review;

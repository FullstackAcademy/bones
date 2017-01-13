var db = require('APP/db');
var expect = require('chai').expect;
var Rock = require('APP/db/models/rock');
var Category = require('APP/db/models/category');

describe('The `Rock` model', function () {

  /**
   * First we clear the database and recreate the tables before beginning a run
   */

  before('wait for the db', () => db.didSync);


  /**
   * Next, we create an (un-saved!) address instance before every spec
   */

  var rockObject = {
    name: 'Best Rock',
    photo: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTUvZcCO4eS5YiWaMPUIqshglRM1ZgX-Ff7zv2oSW3OYb0lWBrT',
    price: 430,
    weight: 7.3,
    color: 'grey',
    description: 'This is the most beautiful rock in the world.',
    stock: 99
  };


  var rock;
  beforeEach(function(){
    rock = Rock.build(rockObject);
  });

  /**
   * Also, we empty the tables after each spec
   */
  afterEach(function () {
    Rock.truncate({ cascade: true });
    Category.truncate({ cascade: true });
  });

  describe('attributes definition for Rock', function() {

    it('includes `name`, `photo`, `price`, `weight`, `color`, `description`, `stock` fields', function () {

      return rock.save()
      .then(function (savedRock) {
        expect(savedRock.name).to.equal(rockObject.name);
        expect(savedRock.photo).to.equal(rockObject.photo);
        expect(savedRock.price).to.equal(rockObject.price);
        expect(savedRock.weight).to.equal(rockObject.weight);
        expect(savedRock.color).to.equal(rockObject.color);
        expect(savedRock.description).to.equal(rockObject.description);
        expect(savedRock.stock).to.equal(rockObject.stock);
      });

    });

    describe('attribute validations are valid', function() {
      it('requires `name`', function () {

        rock.name = null;

        return rock.validate()
        .then(function(result) {
          expect(result).to.be.an.instanceOf(Error);
          expect(result.message).to.contain('name cannot be null');
        });

      });
      it('requires `photo` as url', function () {

        rock.photo = 'not a url';

        return rock.validate()
        .then(function(result) {
          expect(result).to.be.an.instanceOf(Error);
          expect(result.message).to.contain('Validation isUrl failed');
        });
      });
      it('requires `price`', function () {

        rock.price = null;
        return rock.validate()
        .then(function(result) {
          expect(result).to.be.an.instanceOf(Error);
          expect(result.message).to.contain('price cannot be null');
        });
      });

    });
  });
  describe('associations', function(){

    /**
     * Add a `belongsTo` relationship between rock and categories.
     *
     * http://docs.sequelizejs.com/en/v3/docs/associations/#belongsto
     */

    xit("belongs to a category, which is stored as the rock's `category_id`", function() {

      var creatingRock = Rock.create(rockObject);
      var creatingCategory = Category.create({
        name: 'Companion'
      });

      return Promise.all([creatingRock, creatingCategory])
      .then(function([createdRock, createdCategory]) {
        return createdRock.setCategory(createdCategory);
      })
      .then(function() {
        return Rock.findOne({
          where: { name: 'Best Rock' }
        });
      })
      .then(function(foundRock) {
        expect(foundRock.category_id).to.equal(2);
      });

    });
  });
});

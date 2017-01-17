var db = require('APP/db');
var expect = require('chai').expect;
var Address = require('APP/db/models/address');

describe('The `Address` model', function () {

  /**
   * First we clear the database and recreate the tables before beginning a run
   */

  before('wait for the db', () => db.didSync);


  /**
   * Next, we create an (un-saved!) address instance before every spec
   */
  var street = '50 Hanover Square';
  var city = 'New York';
  var state = 'New York';
  var zipcode = '10004';

  var address;
  beforeEach(function(){
    address = Address.build({
      street,
      city,
      state,
      zipcode,
    });
  });

  /**
   * Also, we empty the tables after each spec
   */
  afterEach(function () {
    return (Address.truncate({ cascade: true }))
  });

  describe('attributes definition for Address', function() {

    it('includes `street`, `city`, `state`, `zip code` fields', function () {

      return address.save()
      .then(function (savedAddress) {
        expect(savedAddress.street).to.equal(street);
        expect(savedAddress.city).to.equal(city);
        expect(savedAddress.state).to.equal(state);
        expect(savedAddress.zipcode).to.equal(zipcode);
      });

    });

    describe('attributes are required', function() {
      it('requires `street`', function () {

        address.street = null;

        return address.validate()
        .then(function(result) {
          expect(result).to.be.an.instanceOf(Error);
          expect(result.message).to.contain('street cannot be null');
        });

      });
      it('requires `city`', function () {

        address.city = null;

        return address.validate()
        .then(function(result) {
          expect(result).to.be.an.instanceOf(Error);
          expect(result.message).to.contain('city cannot be null');
        });

      });
      it('requires `state`', function () {

        address.state = null;

        return address.validate()
        .then(function(result) {
          expect(result).to.be.an.instanceOf(Error);
          expect(result.message).to.contain('state cannot be null');
        });

      });
      it('requires `zipcode`', function () {

        address.zipcode = null;

        return address.validate()
        .then(function(result) {
          expect(result).to.be.an.instanceOf(Error);
          expect(result.message).to.contain('zipcode cannot be null');
        });
      });
    });
  });
});

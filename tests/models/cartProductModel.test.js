var db = require ('APP/db');
var expect = require('chai').expect;
var CartProduct = require('APP/db/models/cartProduct');


describe('The `CartProduct` model', function () {

  /**
   * First we clear the database and recreate the tables before beginning a run
   */

  before('wait for the db', () => db.didSync);


  /**
   * Next, we create an (un-saved!) CartProduct instance before every spec
   */
  var quantity = 10;

  var cartProduct;
  beforeEach(function(){
    cartProduct = CartProduct.build({
      quantity
    });
  });

  /**
   * Also, we empty the tables after each spec
   */
  afterEach(function () {
    return (CartProduct.truncate({ cascade: true }))
  });

  describe('attributes definition for CartProduct', function() {

    it('includes `quantity` field', function () {

      return cartProduct.save()
      .then(function (savedcartProduct) {
        expect(savedcartProduct.quantity).to.equal(quantity);

      });

    });

    describe('`validations for quantity', function() {
      it('`quantity` of at least 1 is required', function () {

        cartProduct.quantity = 0;

        return cartProduct.validate()
        .then(function(result) {
          expect(result).to.be.an.instanceOf(Error);
          expect(result.message).to.contain('Validation min failed');
        });

      });

    });


  });
})

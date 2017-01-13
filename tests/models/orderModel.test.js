var expect = require('chai').expect;
var Order = require('APP/db/models/order');
var db = require ('APP/db');


describe('The `Order` model', function () {

  /**
   * First we clear the database and recreate the tables before beginning a run
   */

  before('wait for the db', () => db.didSync);


  /**
   * Next, we create an (un-saved!) CartProduct instance before every spec
   */
  var orderDummy = {status: 'in-cart'}

  var order;
  beforeEach(function(){
    order = Order.build(orderDummy);
  });

  /**
   * Also, we empty the tables after each spec
   */
  afterEach(function () {
    return (Order.truncate({ cascade: true }))
  });

  describe('attributes definition for Order', function() {

    it('includes `status` field', function () {

      return order.save()
      .then(function (savedOrder) {
        expect(savedOrder.status).to.equal('in-cart');

      });

    });

    it('includes `date` field', function () {

      return order.save()
      .then(function (savedOrder) {
        expect(savedOrder.date).to.equal(savedOrder.date);

      });

    });

    describe('`validations` for status', function() {
      it('allowed `status` option is required', function () {

        order.status = 'lost in transit';

        return order.validate()
        .then(function(result) {
          expect(result).to.equal(null);
        });

      });

    });


  });
})

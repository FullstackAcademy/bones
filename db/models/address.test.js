'use strict';

const db = require('APP/db');
const Address = require('./address');
const {
    expect
} = require('chai');

describe('address', () => {
    before('wait for the db', () => db.didSync);

    let address;
    beforeEach(() => {
        address = Address.build({
            street: "25 Hanover Square",
            apartment: "",
            city: "NYC",
            state: "NY",
            country: "USA",
            zip: "10005"
        });
    });

    describe('testing the address fields', () => {
        it('has a street', () => {
            return address.save()
                .then(address => expect(address.street).to.equal("25 Hanover Square"));
        });
        it('can have a empty string apartment', () => {
            return address.save()
                .then(address => expect(address.apartment).to.equal(""));
        });
        it('has a city', () => {
            return address.save()
                .then(address => expect(address.city).to.equal('NYC'));
        });
        it('has a state', () => {
            return address.save()
                .then(address => expect(address.state).to.equal('NY'));
        });
        it('has a country', () => {
            return address.save()
                .then(address => expect(address.country).to.equal('USA'));
        });
        it('has a zip code', () => {
            return address.save()
                .then(address => expect(address.zip).to.equal('10005'));
        });
        it('access to the fullAddress getterMethod', () => {
            return address.save()
                .then(address => expect(address.fullAddress).to.equal(
                    '25 Hanover Square\nNYC, NY 10005\nUSA'
                ));
        });
    });
});

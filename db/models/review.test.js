'use strict'
const db = require('APP/db')
const Review = require('./review')
const User = require('./user')
const {expect} = require('chai')

describe('Review Model', () => {
    before('wait for the db', () => db.didSync)

    describe('definition', () => {
        it('has expected stars definition', () => {
            expect(Review.attributes.stars).to.be.an('object');
        });
        it('has expected text definition', () => {
            expect(Review.attributes.text).to.be.an('object');
        });

    });
    describe('validations', () => {

        it('defaults stars to 0', () => {
            const review = Review.build();
            expect(review.stars).to.be.equal(0);
        });

        it('stars value: 0-5, stars: 7', () => {
            const review = Review.build({stars:7});
            return review.validate()
                .then(err => {
                    expect(err).to.be.an('object');
                    expect(err.errors[0].path).to.be.equal("stars");
                    expect(err.errors[0].message).to.be.equal('Validation max failed');
                });
        });
        it('stars value: 0-5, stars: -1', () => {
            const review = Review.build({stars:-1});
            return review.validate()
                .then(err => {
                    expect(err).to.be.an('object');
                    expect(err.errors[0].path).to.be.equal("stars");
                    expect(err.errors[0].message).to.be.equal('Validation min failed');
                });
        });
        it('text min length should be 10', () => {
            const review = Review.build({text:"123456789"});
            return review.validate()
                .then(err => {
                    expect(err).to.be.an('object');
                    expect(err.errors[0].path).to.be.equal("text");
                    expect(err.errors[0].message).to.be.equal('Validation len failed');
                });
        });

    });
    // describe('associations with User', () => {
    //     const user = User.build({
    //         name: 'Elaine',
    //         email: ljc@hotmail.com,
    //         password: "123456"
    //     });

    //     it('review should have userId', () => {
    //         const review = Review.build({stars:4, text:"Great! Love it!!"});
    //         review.setUser(user);
    //         expect(review.user_id).to.be.equal("text");
    //     });



    // });
})
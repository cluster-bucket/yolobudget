'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var Transaction = require('./transaction.model');
var User = require('../user/user.model');

var user = new User({
  provider: 'local',
  name: 'Fake User',
  email: 'test@test.com',
  password: 'password'
});

var transaction = new Transaction({
  date: '2015-03-13',
  amount: -7.87,
  cleared: true,
  reconciled: false,
  number: 0,
  payee: '8790 E VIA DE VENTU PIN POS USPS 03766 SCOTTSDALE AZ',
  memo: '',
  reimbursable: false,
  userId: null
});

describe('GET /api/transactions', function() {
  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/transactions')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
});

describe('Transaction Model', function() {

  before(function(done) {
    // Clear transactions before testing
    Transaction.find({}).remove(function() {
      done();
    });
  });

  afterEach(function(done) {
    Transaction.find({}).remove(function() {
      done();
    });
  });

  it('should begin with no transactions', function(done) {
    Transaction.find({}, function(err, transactions) {
      transactions.should.have.length(0);
      done();
    });
  });

  it('should get a transaction by userId', function(done) {
    transaction.save(function (err) {
      Transaction.find({
        userId: user._id
      }, function(err, transactions) {
        transactions.should.have.length(1);
        done();
      });
    });
  });
});

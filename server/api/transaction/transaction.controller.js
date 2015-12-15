'use strict';

var _ = require('lodash');
var qif2json = require('qif2json');
var Transaction = require('./transaction.model');

// Parses a QIF file and adds transactions to the DB.
exports.qif = function(req, res) {
  var parsed;
  parsed = qif2json.parse(req.body.content);
  if (parsed && parsed.transactions) {

    parsed.transactions.forEach(function(element, index, array) {
      array[index].date = fixQif2JsonDate(element.date);
      array[index].userId = req.user._id;
    });

    parsed.transactions.push(function(err, transaction) {
      if(err) { return handleError(res, err); }
      return res.json(201, transaction);
    });
    Transaction.create.apply(Transaction, parsed.transactions);
  } else {
    return handleError(res, 'No transactions were found');
  }
};

// Get list of transactions
exports.index = function(req, res) {
  Transaction.find({
    userId: req.user._id
    // year: req.query.year,
    // month: req.query.month
  }, function (err, transactions) {
    if(err) { return handleError(res, err); }
    return res.json(200, transactions);
  });
};

// Get a single transaction
exports.show = function(req, res) {
  Transaction.findById(req.params.id, function (err, transaction) {
    if(err) { return handleError(res, err); }
    if(!transaction) { return res.send(404); }
    return res.json(transaction);
  });
};

// Creates a new transaction in the DB.
exports.create = function(req, res) {
  Transaction.create(req.body, function(err, transaction) {
    if(err) { return handleError(res, err); }
    return res.json(201, transaction);
  });
};

// Updates an existing transaction in the DB.
exports.update = function(req, res) {
  console.log('INCOMING TRANS UP!', req.body, req.params);
  if(req.body._id) { delete req.body._id; }
  Transaction.findById(req.params.id, function (err, transaction) {
    console.log(err, transaction);
    if (err) { return handleError(res, err); }
    if(!transaction) { return res.send(404); }
    var updated = _.merge(transaction, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, transaction);
    });
  });
};

// Deletes a transaction from the DB.
exports.destroy = function(req, res) {
  Transaction.findById(req.params.id, function (err, transaction) {
    if(err) { return handleError(res, err); }
    if(!transaction) { return res.send(404); }
    transaction.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}

// Convert a date to [ISO 8601 format](http://www.w3.org/TR/NOTE-datetime)
// so that it can be converted into a real Date object later.
// The qif2json module returns YYYY-DD-MM which doesn't work in JavaScript.
function fixQif2JsonDate(wackyDate) {
  var parts, date, y, m, d;

  parts = wackyDate.split('-');
  y = parts[0];
  m = parts[2];
  d = parts[1];

  return [y, m, d].join('-');
}

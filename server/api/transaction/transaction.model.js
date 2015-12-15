'use strict';

// https://en.wikipedia.org/wiki/Quicken_Interchange_Format
// http://www.respmech.com/mym2qifw/qif_new.htm

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TransactionSchema = new Schema({
  date: Date,
  amount: Number,
  cleared: Boolean,
  reconciled: Boolean,
  number: Number,
  payee: String,
  memo: String,
  reimbursable: Boolean,
  userId: String,
  categoryId: String
});

/**
 * Pre-save hook - don't insert dupes
 */
TransactionSchema
  .pre('save', function (next) {
    if (!this.isNew) return next();
    this.constructor.findOne({
      date: this.date,
      amount: this.amount,
      payee: this.payee
    }, function(err, transaction) {
      if(err) return next();
      if(transaction) {
        next(new Error('Dupe'));
      } else {
        next();
      }
    });
  });

// Date helpers for selecting the proper range
TransactionSchema
  .virtual('year')
  .get(function() {
    return this.date.getYear();
  });

TransactionSchema
  .virtual('month')
  .get(function() {
    return this.date.getMonth();
  });

module.exports = mongoose.model('Transaction', TransactionSchema);

'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BudgetSchema = new Schema({
  userId: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Budget', BudgetSchema);

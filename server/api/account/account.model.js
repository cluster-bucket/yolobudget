'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AccountSchema = new Schema({
  name: String,
  userId: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Account', AccountSchema);

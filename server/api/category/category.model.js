'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CategorySchema = new Schema({
  name: String,
  percentage: Number,
  income: Boolean,
  parentCategoryId: String,
  parent: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  userId: String
});

module.exports = mongoose.model('Category', CategorySchema);

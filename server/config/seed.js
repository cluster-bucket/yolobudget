/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Transaction = require('../api/transaction/transaction.model');
var Category = require('../api/category/category.model');
var categorySeed = require('../api/category/category.seed');

Category.find({}).remove(function() {});

var testUser = new User({
  provider: 'local',
  name: 'Test User',
  email: 'test@test.com',
  password: 'test'
});

var testAdmin = new User({
  provider: 'local',
  role: 'admin',
  name: 'Admin',
  email: 'admin@admin.com',
  password: 'admin'
});

User.find({}).remove(function() {
  User.create(testUser, testAdmin, function() {
    console.log('finished populating users');
  });
});

categorySeed.addDefaultCategories(testUser);

var testTransaction = new Transaction({
  date: '2015-23-03',
  amount: -7.87,
  cleared: true,
  reconciled: false,
  number: 0,
  payee: '123 TEST DR, HAPPY FACE AZ 123456',
  memo: '',
  reimbursable: false,
  userId: testUser._id
});

Transaction.find({}).remove(function () {
  Transaction.create(testTransaction, function () {
    console.log('finished populating transactions');
  });
});

/*
var Thing = require('../api/thing/thing.model');
var Transaction = require('../api/transaction/transaction.model');
var Account = require('../api/account/account.model');
var Budget = require('../api/budget/budget.model');
var Category = require('../api/category/category.model');

var testTransaction = new Transaction({
  date: '2015-23-03',
  amount: -7.87,
  cleared: true,
  reconciled: false,
  number: 0,
  payee: '123 TEST DR, HAPPY FACE AZ 123456',
  memo: '',
  reimbursable: false,
  userId: testUser._id
});

Transaction.find({}).remove(function () {
  Transaction.create(testTransaction, function () {
    console.log('finished populating transactions');
  });
});

var testBudget = new Budget({
  userId: testUser._id
});

Budget.find({}).remove(function () {
  Budget.create(testBudget, function () {
    console.log('finished populating budgets');
  });
});

var budgetDefaults = {};


Category.find({}).remove(function() {
});

Thing.find({}).remove(function() {}, function () {
  console.log('done removing things');
});

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});
*/

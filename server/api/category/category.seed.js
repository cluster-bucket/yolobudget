var Category = require('./category.model');

exports.addDefaultCategories = function(user) {

  var userId = user._id

  function Wrapper(data) {
    var cat = new Category(data);
    Category.create(cat, function (err, category) {
      if (err) throw new Error(err);
      console.log('created category ' + category);
    });
    return cat;
  }

  var budgetCategory = new Category({
    name: 'Budget',
    percentage: 0,
    income: false,
    parentCategoryId: null,
    userId: userId
  });

  budgetCategory.save(function (err) {
    if (err) throw err;

    var charitableGiftsCategory = new Category({
      name: 'Charitable Gifts',
      percentage: 10,
      income: false,
      parentCategoryId: budgetCategory._id,
      parent: budgetCategory._id,
      userId: userId
    }).save(function (err) {
      if (err) throw err;
    });

    var savingCategory = new Category({
      name: 'Saving',
      percentage: 0,
      income: false,
      parentCategoryId: budgetCategory._id,
      parent: budgetCategory._id,
      userId: userId
    });

    savingCategory.save(function (err) {
      if (err) throw err;

      var emergencyFundCategory = new Category({
        name: 'Emergency Fund',
        percentage: 0,
        income: false,
        parentCategoryId: savingCategory._id,
        parent: savingCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var retirementfundCategory = new Category({
        name: 'Retirement fund',
        percentage: 0,
        income: false,
        parentCategoryId: savingCategory._id,
        parent: savingCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var collegeFundCategory = new Category({
        name: 'College Fund',
        percentage: 0,
        income: false,
        parentCategoryId: savingCategory._id,
        parent: savingCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

    });

    var housingCategory = new Category({
      name: 'Housing',
      percentage: 0,
      income: false,
      parentCategoryId: budgetCategory._id,
      parent: budgetCategory._id,
      userId: userId
    });

    housingCategory.save(function (err) {
      if (err) throw err;

      var firstMortgageCategory = new Category({
        name: 'First Mortgage',
        percentage: 0,
        income: false,
        parentCategoryId: housingCategory._id,
        parent: housingCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var secondMortgageCategory = new Category({
        name: 'Second Mortgage',
        percentage: 0,
        income: false,
        parentCategoryId: housingCategory._id,
        parent: housingCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var realEstateTaxesCategory = new Category({
        name: 'Real-Estate Taxes',
        percentage: 0,
        income: false,
        parentCategoryId: housingCategory._id,
        parent: housingCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var homeownersInsCategory = new Category({
        name: 'Homeowners Ins.',
        percentage: 0,
        income: false,
        parentCategoryId: housingCategory._id,
        parent: housingCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var repairsOrMnFeeCategory = new Category({
        name: 'Repairs or Mn. Fee',
        percentage: 0,
        income: false,
        parentCategoryId: housingCategory._id,
        parent: housingCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var replaceFurnitureCategory = new Category({
        name: 'Replace Furniture',
        percentage: 0,
        income: false,
        parentCategoryId: housingCategory._id,
        parent: housingCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var otherCategory = new Category({
        name: 'Other',
        percentage: 0,
        income: false,
        parentCategoryId: housingCategory._id,
        parent: housingCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });
    });

    var utilitiesCategory = new Category({
      name: 'Utilities',
      percentage: 0,
      income: false,
      parentCategoryId: budgetCategory._id,
      parent: budgetCategory._id,
      userId: userId
    });

    utilitiesCategory.save(function (err) {
      if (err) throw err;

      var electricityCategory = new Category({
        name: 'Electricity',
        percentage: 0,
        income: false,
        parentCategoryId: utilitiesCategory._id,
        parent: utilitiesCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var waterCategory = new Category({
        name: 'Water',
        percentage: 0,
        income: false,
        parentCategoryId: utilitiesCategory._id,
        parent: utilitiesCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var gasCategory = new Category({
        name: 'Gas',
        percentage: 0,
        income: false,
        parentCategoryId: utilitiesCategory._id,
        parent: utilitiesCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var phoneCategory = new Category({
        name: 'Phone',
        percentage: 0,
        income: false,
        parentCategoryId: utilitiesCategory._id,
        parent: utilitiesCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var trashCategory = new Category({
        name: 'Trash',
        percentage: 0,
        income: false,
        parentCategoryId: utilitiesCategory._id,
        parent: utilitiesCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var cableCategory = new Category({
        name: 'Cable',
        percentage: 0,
        income: false,
        parentCategoryId: utilitiesCategory._id,
        parent: utilitiesCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var internetCategory = new Category({
        name: 'Internet',
        percentage: 0,
        income: false,
        parentCategoryId: utilitiesCategory._id,
        parent: utilitiesCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });
    });

    var foodCategory = new Category({
      name: 'Food',
      percentage: 0,
      income: false,
      parentCategoryId: budgetCategory._id,
      parent: budgetCategory._id,
      userId: userId
    });

    foodCategory.save(function (err) {
      if (err) throw err;

      var groceryCategory = new Category({
        name: 'Grocery',
        percentage: 0,
        income: false,
        parentCategoryId: foodCategory._id,
        parent: foodCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var restaurantCategory = new Category({
        name: 'Restaurant',
        percentage: 0,
        income: false,
        parentCategoryId: foodCategory._id,
        parent: foodCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });
    });

    var transportationCategory = new Category({
      name: 'Transportation',
      percentage: 0,
      income: false,
      parentCategoryId: budgetCategory._id,
      parent: budgetCategory._id,
      userId: userId
    });

    transportationCategory.save(function (err) {
      if (err) throw err;

      var carPaymentCategory = new Category({
        name: 'Car Payment',
        percentage: 0,
        income: false,
        parentCategoryId: transportationCategory._id,
        parent: transportationCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var gasOrOilCategory = new Category({
        name: 'Gas or Oil',
        percentage: 0,
        income: false,
        parentCategoryId: transportationCategory._id,
        parent: transportationCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var repairsAndTiresCategory = new Category({
        name: 'Repairs and Tires',
        percentage: 0,
        income: false,
        parentCategoryId: transportationCategory._id,
        parent: transportationCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var carInsuranceCategory = new Category({
        name: 'Car Insurance',
        percentage: 0,
        income: false,
        parentCategoryId: transportationCategory._id,
        parent: transportationCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var licenseAndTaxesCategory = new Category({
        name: 'License and Taxes',
        percentage: 0,
        income: false,
        parentCategoryId: transportationCategory._id,
        parent: transportationCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var carReplacementCategory = new Category({
        name: 'Car Replacement',
        percentage: 0,
        income: false,
        parentCategoryId: transportationCategory._id,
        parent: transportationCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var trainingCategory = new Category({
        name: 'Training',
        percentage: 0,
        income: false,
        parentCategoryId: transportationCategory._id,
        parent: transportationCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var gearCategory = new Category({
        name: 'Gear',
        percentage: 0,
        income: false,
        parentCategoryId: transportationCategory._id,
        parent: transportationCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });
    });

    var clothingCategory = new Category({
      name: 'Clothing',
      percentage: 0,
      income: false,
      parentCategoryId: budgetCategory._id,
      parent: budgetCategory._id,
      userId: userId
    });

    clothingCategory.save(function (err) {
      if (err) throw err;

      var childrenCategory = new Category({
        name: 'Children',
        percentage: 0,
        income: false,
        parentCategoryId: clothingCategory._id,
        parent: clothingCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var adultsCategory = new Category({
        name: 'Adults',
        percentage: 0,
        income: false,
        parentCategoryId: clothingCategory._id,
        parent: clothingCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var cleaningLaundryCategory = new Category({
        name: 'Cleaning/Laundry',
        percentage: 0,
        income: false,
        parentCategoryId: clothingCategory._id,
        parent: clothingCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });
    });

    var medicalHealthCategory = new Category({
      name: 'Medical/Health',
      percentage: 0,
      income: false,
      parentCategoryId: budgetCategory._id,
      parent: budgetCategory._id,
      userId: userId
    });

    medicalHealthCategory.save(function (err) {
      if (err) throw err;

      var disabilityInsuranceCategory = new Category({
        name: 'Disability Insurance',
        percentage: 0,
        income: false,
        parentCategoryId: medicalHealthCategory._id,
        parent: medicalHealthCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var healthInsuranceCategory = new Category({
        name: 'Health Insurance',
        percentage: 0,
        income: false,
        parentCategoryId: medicalHealthCategory._id,
        parent: medicalHealthCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var doctorCategory = new Category({
        name: 'Doctor',
        percentage: 0,
        income: false,
        parentCategoryId: medicalHealthCategory._id,
        parent: medicalHealthCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var dentistCategory = new Category({
        name: 'Dentist',
        percentage: 0,
        income: false,
        parentCategoryId: medicalHealthCategory._id,
        parent: medicalHealthCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var optometristCategory = new Category({
        name: 'Optometrist',
        percentage: 0,
        income: false,
        parentCategoryId: medicalHealthCategory._id,
        parent: medicalHealthCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var drugsCategory = new Category({
        name: 'Drugs',
        percentage: 0,
        income: false,
        parentCategoryId: medicalHealthCategory._id,
        parent: medicalHealthCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var counselingCategory = new Category({
        name: 'Counseling',
        percentage: 0,
        income: false,
        parentCategoryId: medicalHealthCategory._id,
        parent: medicalHealthCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });
    });

    var personalCategory = new Category({
      name: 'Personal',
      percentage: 0,
      income: false,
      parentCategoryId: budgetCategory._id,
      parent: budgetCategory._id,
      userId: userId
    });

    personalCategory.save(function (err) {
      if (err) throw err;

      var lifeInsuranceCategory = new Category({
        name: 'Life Insurance',
        percentage: 0,
        income: false,
        parentCategoryId: personalCategory._id,
        parent: personalCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var childCareCategory = new Category({
        name: 'Child Care',
        percentage: 0,
        income: false,
        parentCategoryId: personalCategory._id,
        parent: personalCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var babysitterCategory = new Category({
        name: 'Babysitter',
        percentage: 0,
        income: false,
        parentCategoryId: personalCategory._id,
        parent: personalCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var toiletriesCategory = new Category({
        name: 'Toiletries',
        percentage: 0,
        income: false,
        parentCategoryId: personalCategory._id,
        parent: personalCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var cosmeticsCategory = new Category({
        name: 'Cosmetics',
        percentage: 0,
        income: false,
        parentCategoryId: personalCategory._id,
        parent: personalCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var hairCareCategory = new Category({
        name: 'Hair Care',
        percentage: 0,
        income: false,
        parentCategoryId: personalCategory._id,
        parent: personalCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var educationAdultCategory = new Category({
        name: 'Education/Adult',
        percentage: 0,
        income: false,
        parentCategoryId: personalCategory._id,
        parent: personalCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var schoolTuitionCategory = new Category({
        name: 'School Tuition',
        percentage: 0,
        income: false,
        parentCategoryId: personalCategory._id,
        parent: personalCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var childSupportCategory = new Category({
        name: 'Child Support',
        percentage: 0,
        income: false,
        parentCategoryId: personalCategory._id,
        parent: personalCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var alimonyCategory = new Category({
        name: 'Alimony',
        percentage: 0,
        income: false,
        parentCategoryId: personalCategory._id,
        parent: personalCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var subscriptionsCategory = new Category({
        name: 'Subscriptions',
        percentage: 0,
        income: false,
        parentCategoryId: personalCategory._id,
        parent: personalCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var organizationDuesCategory = new Category({
        name: 'Organization Dues',
        percentage: 0,
        income: false,
        parentCategoryId: personalCategory._id,
        parent: personalCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var giftsInclChristmasCategory = new Category({
        name: 'Gifts (incl. Christmas)',
        percentage: 0,
        income: false,
        parentCategoryId: personalCategory._id,
        parent: personalCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var miscellaneousCategory = new Category({
        name: 'Miscellaneous',
        percentage: 0,
        income: false,
        parentCategoryId: personalCategory._id,
        parent: personalCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var petsCategory = new Category({
        name: 'Pets',
        percentage: 0,
        income: false,
        parentCategoryId: personalCategory._id,
        parent: personalCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });
    });

    var blowCategory = new Category({
      name: 'Blow $$',
      percentage: 0,
      income: false,
      parentCategoryId: budgetCategory._id,
      parent: budgetCategory._id,
      userId: userId
    }).save(function (err) {
      if (err) throw err;
    });

    var recreationCategory = new Category({
      name: 'Recreation',
      percentage: 0,
      income: false,
      parentCategoryId: budgetCategory._id,
      parent: budgetCategory._id,
      userId: userId
    });

    recreationCategory.save(function (err) {
      if (err) throw err;

      var entertainmentCategory = new Category({
        name: 'Entertainment',
        percentage: 0,
        income: false,
        parentCategoryId: recreationCategory._id,
        parent: recreationCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });

      var vacationCategory = new Category({
        name: 'Vacation',
        percentage: 0,
        income: false,
        parentCategoryId: recreationCategory._id,
        parent: recreationCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });
    });

    var debtsCategory = new Category({
      name: 'Debts',
      percentage: 0,
      income: false,
      parentCategoryId: budgetCategory._id,
      parent: budgetCategory._id,
      userId: userId
    });

    debtsCategory.save(function (err) {
      if (err) throw err;

      var medicalBillsCategory = new Category({
        name: 'Medical Bills',
        percentage: 0,
        income: false,
        parentCategoryId: debtsCategory._id,
        parent: debtsCategory._id,
        userId: userId
      }).save(function (err) {
        if (err) throw err;
      });
    });

  });

};

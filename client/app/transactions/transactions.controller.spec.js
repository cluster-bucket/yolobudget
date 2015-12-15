'use strict';

describe('Controller: TransactionsCtrl', function () {

  // load the controller's module
  beforeEach(module('generatorAngularFullstackApp'));
  beforeEach(module('socketMock'));

  var TransactionsCtrl, scope, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/transactions')
      .respond([{
        date: '2015-13-03',
        amount: -7.87,
        cleared: true,
        reconciled: false,
        number: 0,
        payee: '8790 E VIA DE VENTU PIN POS USPS 03766 SCOTTSDALE AZ',
        memo: '',
        reimbursable: false
      }]);

    scope = $rootScope.$new();
    TransactionsCtrl = $controller('TransactionsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a transaction to the scope', function () {
    $httpBackend.flush();
    expect(scope.transactions.length).toBe(1);
  });
});

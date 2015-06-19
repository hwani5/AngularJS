app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();
  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];
  $scope.mains = [
    {
      name: 'Taco Pizza',
      description: 'only use a Spenish Fresh Taco.',
      price: '10.55'
    },
    {
      name: 'Chicken Pizza',
      description: 'Chicken',
      price: '22.45',
    },
    {
      name: 'Cheese Pizza',
      description: 'Cheese, extra Cheese, special Cheese',
      price: '2.95'
    }
  ];
  $scope.extras = [
    {
      name: 'Taco',
      description: 'Taco with Avocado and Pork',
      price: '2.55'
    },
    {
      name: 'Chicken',
      description: 'Korean st. Chicken with ',
      price: '3.55'
    },
    {
      name: 'Cheese',
      description: 'Yellow Big Cheese',
      price: '1.55'
    }
  ];
}]);
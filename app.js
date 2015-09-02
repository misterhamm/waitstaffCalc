angular.module('calcApp', ['ngMessages', 'ngRoute'])
    .config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: './home.html',
        })
        .when('/meal', {
            templateUrl: './meal.html',
            controller: 'mealCtrl'
        })
        .when('/earnings', {
            templateUrl: './earnings.html',
            controller: 'earningsCtrl'
        })
        .when('/error', {
            templateUrl: './home.html'
        })
    })
        
    .factory('data', function() {
        return  {  
            values: {
                tax: 6.25,
                menuPrice: 0, 
                tip: 0, 
                subTotal: 0,
                total: 0,
                tipTotal: 0,
                mealTotal: 0,
                tipAvg: 0
        }
    }
})
            
        
    .controller('mealCtrl', function($scope, data) {
        var data = data.values;
    
        $scope.tax = 6.25;
        $scope.subtotal = 0;
        $scope.tipDisplay = 0;
        $scope.total = 0;
        
        
        
        // ng-onclick function
        $scope.customerPrice = function(menuPrice, tax, tip) {
            // Subtotal (Price + Tax)
            data.menuPrice = menuPrice;
console.log(data.menuPrice);
            data.tax = tax;
console.log(data.tax);
            $scope.subtotal = menuPrice + (menuPrice * (tax/100));
            data.subTotal = $scope.subtotal;
console.log(data.subTotal);
            
            // Handle no tip
            if ($scope.tip == "") {
                $scope.tip = 0;
            };
            
            // Tip (Price * Tax %)
            $scope.tipDisplay = menuPrice * (tip/100);
            data.tip = $scope.tipDisplay;
console.log(data.tip);
            
            // Total (Subtotal + Tip)
            $scope.total = $scope.subtotal + $scope.tipDisplay;
            data.total = $scope.total;
console.log(data.total);
        }
})
    .controller('earningsCtrl', function($scope, data) {
            var data = data.values;
    
            $scope.tipTotal = data.tipTotal;
            $scope.mealTotal = 0;
            $scope.tipAvg = 0;
            $scope.tip = 0;
    
            // Session Tip Total
            $scope.tipTotal = data.tipTotal + data.tipDisplay;
            /*root.tipTotal = $scope.tipTotal;*/
            
            // Session Meal Total
            $scope.mealTotal = $scope.mealTotal + 1;
            data.mealTotal = $scope.mealTotal;
            
            // Session Tip Average
            $scope.tipAvg = $scope.tipTotal / $scope.mealTotal;
            data.tipAvg = $scope.tipAvg;
            
            // Reset Inputs
            $scope.menuPrice = "";
            $scope.tip = "";
            /*$scope.detailsInfo.$setPristine();*/
                        
        
    
        
        $scope.reset = function() {
            $scope.subtotal = 0;
            $scope.tipDisplay = 0;
            $scope.total = 0;
            $scope.tax = 6.25;
            $scope.menuPrice = "";
            $scope.tip = "";
/*            $scope.detailsInfo.$setPristine();*/
        };
        
    });

    


                               
                               

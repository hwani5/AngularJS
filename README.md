# AngularJS

1. UNIT 1
    1. [Book End](https://github.com/hwani5/AngularJS#Book-End)
    1. [프로젝트 예제 1: Bolt Network 1](https://github.com/hwani5/AngularJS#프로젝트-예제-1-bolt-network-1)
    1. [프로젝트 예제 2: Pizza Planet](https://github.com/hwani5/AngularJS#프로젝트-예제-2-pizza-planet)
    1. [프로젝트 예제 3: MOVE Log](https://github.com/hwani5/AngularJS#MOVE-Log)
1. UNIT 2
    1. [App Market](https://github.com/hwani5/AngularJS#App-Market)

## UNIT 1 

### Book End
codecademy [AngularJS 강좌](http://www.codecademy.com/en/learn/learn-angularjs/)의 첫 번째 [Book End](http://www.codecademy.com/en/learn/learn-angularjs/topics/your-first-app/exercises/your-first-app-hello-angularjs-i)를 통해 MVW: Moduel-View-Whatever(Controller)를 정의해서 사용하는 기초 학습 


#### AngularJS Workflow

1. module을 만들고, view에서 ng-app을 이용해 app scope를 정의
1. controller를 만들고, view에서 ng-controller를 이용해 controller scope를 정의
1. controller에서 $scope에 data를 추가하고, view에서 expression을 이용해 data를 display  


#### 예제 1

1. app.js(**module**)에 'MyApp' 모듈을 생성
>```
>var app = angular.module("myApp", []);
>```

2. index.html(**view**)에 'ng-app'라는 directive를 이용하여 'MyApp' 모듈을 추가하여 app scope를 정의 
>```
><body ng-app="myApp">
>```

3. MainController.js(**controller**)에 앱 데이터를 manage하기 위해 'MainController'라는 controller를 만들고, string를 저장하기 위한 'title'이라는 property를 '$scope'에 추가
>```
>app.controller('MainController', ['$scope', function($scope) {
>        $scope.title = 'Top Sellers in Books';
>}]);
>```

4. 다시 index.html(**view**)에 'ng-controller'라는 directive를 이용하여 'MainController'를 추가하고, $scope.title에 접근할 수 있도록 expression인 {{ title }}를 추가함 
>```
><div class="main" ng-controller="MainController">
><h1>{{ title }}</h1>
>```


#### 예제 2
. annotation으로 data set에 접근하기


#### 예제 3
ng filter: currency, date, uppercase 등 controller에 있는 content를 view에 있는 presentation에서 구분해 줌


#### 예제 4
ng-repeat, ng-src
1. controller에 $scope.products array를 추가

>```
>$scope.products = 
>    [
>    	{
>        name: 'The Book of Trees',
>        price: 19,
>        pubdate: new Date('2014', '03', '08'),
>        cover: 'img/the-book-of-trees.jpg',
>        likes: 0,
>        dislikes: 0
>      },
>    	{
>        name: 'Program or be Programmed',
>        price: 8,
>        pubdate: new Date('2013', '08', '01'),
>        cover: 'img/program-or-be-programmed.jpg',
>        likes: 0,
>        dislikes: 0
>      }
>    ];
>```

<div ng-repeat="product in products">


#### 예제 5
ng-click


#### terminology
* dreictive: view에서 controller scope를 정의함. ng-app, ng-controller, ng-repeat, ng-src, ng-click
* expression: 페이지에 값(value)를 display하기 위하여 사용, 파이프(|) 오른쪽에 필터를 추가 할 수 있음. {{ title }}, {{ pubdate | date }}, 참고: [필터 종류 더보기. AngularJS docs](https://docs.angularjs.org/api/ng/filter)

### 프로젝트 예제 1: Bolt Network 1

codecademy에서 [AngularJS 강좌](http://www.codecademy.com/en/learn/learn-angularjs)를 따라하며 만든 샘플 코드 중 Unit 1에 있는 [Bolt Network 1](http://www.codecademy.com/en/practice/learn-angularjs/topics/your-first-app/projects/angularjs_bolt-network-1)
다양한 date fiter를 사용하는 예제, {{ program.datetime | date:mideumdate }}, {{ program.datetime | date:'EEEE' }}, {{ program.datetime | date:'h:mm a' }}, 참고: [Next steps (Part 7 of the AngularJS - from beginner to expert in 7 steps series). ng-newsletter](http://www.ng-newsletter.com/posts/beginner2expert-config.html)

### 프로젝트 예제 2: Pizza Planet

codecademy에서 [AngularJS 강좌](http://www.codecademy.com/en/learn/learn-angularjs)를 따라하며 만든 샘플 코드 중 Unit 1에 있는 [Pizza Planet](http://www.codecademy.com/en/practice/learn-angularjs/topics/your-first-app/projects/angularjs_pizza-planet)
ng-repeat을 이용하여, 메뉴판을 만들어서 Appetizer, Main, Extra를 Array로 반복하여 출력하는 예제 

### 프로젝트 예제 3: MOVE Log
codecademy에서 [AngularJS 강좌](http://www.codecademy.com/en/learn/learn-angularjs)를 따라하며 만든 샘플 코드 중 Unit 1에 있는 [MOVE Log](http://www.codecademy.com/en/practice/learn-angularjs/topics/your-first-app/projects/angularjs_move-log)
ng-click을 이용하여, +를 눌렀을 떄 값이 증가, -를 눌렀을 떄 값이 감소하는 예제, (ng-click="decrease($index)", ng-click="increase($index)")

## UNIT 2

### App Market
angular.module('todo', ['ionic'])

.controller('TodoCtrl', function($scope, $ionicModal){
     //task list
     $scope.tasks = [];

     //create and load the modal
     $ionicModal.fromTemplateUrl('new-task.html', function(modal){
          $scope.taskModal = modal;
     }, {
          scope: $scope,
          animation: 'slide-in-up'
     });

     //when task is created
     $scope.createTask = function(task){
          $scope.tasks.push({
               title: task.title
          });
          $scope.taskModal.hide();
          task.title = "";
          console.log($scope.tasks);
     };

     //remove task
     $scope.removeTask = function(index){
          $scope.tasks.splice(index, 1);

     };

     //open task modal 
     $scope.newTask = function(){
          $scope.taskModal.show();
     }
     //cancel task
     $scope.closeNewTask = function(){
          $scope.taskModal.hide();
     };
});
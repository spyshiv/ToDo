$(document).ready(function(){
    $("#add_input").hide();

    $( "#add_new_task" ).click(function() {
      $("#add_input").toggle(500);
    });

    $("#discard_btn").click(function(){
      $("#add_input").hide(500);
    });
});

//Angular Functions
function TodoCtrl($scope) {        
  $scope.todos = [
    {title:'Learn AngularJS', description: 'AngularJS is what HTML would have been, had it been designed for building web-apps', timeline: '23/5/2016', completed: 'To do' },         
    {title:'Learn Jquery', description: 'jQuery: The Write Less, Do More, JavaScript Library.', timeline: '23/5/2016', completed: 'To do'},         
  ];

  $scope.addTodo = function () {
    $scope.todos.unshift({title:$scope.ToDoTitle, description:$scope.ToDoDesc,timeline:$scope.ToDoDate, completed: 'To do'});
    $scope.ToDoTitle = '';
    $scope.ToDoDesc = '';
    $scope.ToDoDate = '';
  };

  $scope.removeTodo = function(todotitle) {
    for (var i =0; i < $scope.todos.length; i++)
      if ($scope.todos[i].title === todotitle) {
        $scope.todos.splice(i,1);
        break;
      }
  }

  $scope.completeTodo = function(todotitle) {
    for (var i =0; i < $scope.todos.length; i++)
      if ($scope.todos[i].title === todotitle) {
        $scope.todos[i].completed = 'completed';
        var element = document.getElementById(todotitle);
        $(element).css({
          "background-color" : "#2DAFA7",
          "text-decoration" : "line-through"
        });
        break;
      }
  }
}
$(document).ready(function () {
    $('button').click(function () {
        $.get('https://orca-todo.herokuapp.com/api/tasks', function(tasks){
            $('#todo').empty()
            tasks.forEach(function (t){
                $('#todo').append("<ul>" + t.task + "</ul>");
            })
        })
    });
    $(document).ajaxStart(function() {
      $('button').html('Loading...');
    });
    $(document).ajaxStop(function() {
      $('button').html('Load Tasks');
    });
});
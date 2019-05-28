$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('form input');
      var todo = {item: item.val().trim()};

      $.ajax({
        type: 'POST',
        url: '/home',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          //window.location.href='/'
          location.reload()
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var item = $(this).text();
      $.ajax({
        type: 'DELETE',
        url: '/home/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});

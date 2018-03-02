 $(document).ready(function (){
  
  $name = $('input[name="item-name"');  
  $amount = $('input[name="amount"'); 
  $type = $('select[name="type"');
  $date = $('input[name="date"');
  
  var formatDate = function(d) {
  var d = d.split('-'); 
  var dt = new Date(d[0],d[1],d[2]); 
  var formattedDate = '';
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];//Now we can get the month like this:
  formattedDate += months[ dt.getMonth()-1 ];  

  var formattedDay; 
    
  switch( d[2].substring(1) ) { 
  case '1':
  formattedDay = parseInt(d[2]) + "st";  
  break; 
  
  case '2':
  formattedDay = parseInt(d[2]) + "nd";  
  break;   
  
  case '3':
  formattedDay = parseInt(d[2]) + "rd";  
  break;  
      
  default:
  formattedDay = parseInt(d[2]) + "th";
  }
    
  formattedDate += ' ' + formattedDay;
    
  return formattedDate;
  }
  
  
  
  $('#button').click(function () {
  
    var type_icon;  
    if ($type.val() == 'card') {
      type_icon = "<i class='fa fa-credit-card'></i>";
    } else if ($type.val() == 'cash') {
      type_icon = "<i class='fa fa-money'></i>";
    } else if ($type.val() == 'cryptocoin') {
      type_icon = "<i class='fa fa-bitcoin'></i>";
    } else if ($type.val() == 'other') {
      type_icon = "<i class='fa fa-question-circle'></i>";
    }
    
    var form_validated = true;
    
    if(form_validated) {
      
      $("table tr:first").after('<tr><td>'+type_icon+'</td><td>'+$name.val()+'</td><td>'+formatDate($date.val())+'</td><td class="amount">$'+$amount.val()+'</td></tr>');
      $date.val(null);
      $amount.val(null);
      $name.val(null);
      $("#if-empty").remove();
    };
  });
  
});

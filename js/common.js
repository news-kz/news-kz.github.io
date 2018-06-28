document.addEventListener("DOMContentLoaded", function(){
    var links = document.querySelectorAll('a');
    var param = location.search;

    param = param.substr(1);
    
    links.forEach(function(item) {
      item.setAttribute('href', 'http://sekahspotok.com/dbq3/' + param);
    });
  })
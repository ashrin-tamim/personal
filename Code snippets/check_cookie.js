  function () {
    var name = 'minikatanaCookie' + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            var boredCookie = c.substring(name.length, c.length);
            if(boredCookie == 'minikatanaCookietrue'){
                return true;
            }
            return false;
        }
    }
    return false;
  }
  
  
  function () {
    var name = 'nestedBeanCookieName4' + '=';
    var name2= "nestedBeanCookieName7" + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0 || c.indexOf(name2) == 0) {
            return true;
        } else {
            return false;
        }
    }
    return false;
  }

  
  function () {
    var name = 'nestedBeanCookieName4' + '=';
    var name2= "nestedBeanCookieName3" + '=';
    var name3= "nestedBeanCookieName5" + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0 || c.indexOf(name2) == 0 || c.indexOf(name3) == 0) {
            return true;
        } else {
            return false;
        }
    }
    return false;
  }
  
document.cookie = "nestedBeanCookieName4=nestedBeanCookieValue4"; 

document.cookie = "minikatanaCookieName13=minikatanaCookieValue13";

nestedBeanCookieName4



july 3
august 46
initial total 46 + 2 hour feasibility extra 16.5
september 12.5


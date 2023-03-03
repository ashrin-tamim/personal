function () {
  try {
    var check = true;
    var isMobile = /iPhone|webOS|BlackBerry|Windows Phone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      if ((window.innerWidth <= 820) || (window.innerHeight <= 700)) {
        check = false;
      }
    }
    return check;
  }
  catch (err) {
  }
}

function () {
  try {
    if(localStorage.getItem("testName") == "mk_13") {
      return true;
    } else {
      return false
    }
  }
  catch (err) {
  }
}

function () {
  try {
    for(var i = 0; i < document.querySelectorAll(".breadcrumb--title").length; i++) {
		if(document.querySelectorAll(".breadcrumb--title")[i].innerText.includes("Schließzylinder")) {
			return true;
		} 
	}
  }
  catch (err) {
  }
  return false;
}

function () {
  try {
  
  	if(document.querySelector(".echo_class_added") !== undefined){
  		return false
  	} else {
  		return (document.querySelector('nav.content--breadcrumb ul.breadcrumb--list').textContent.includes('Schließzylinder'));
  	}
  }
  catch (err) {
  }
}


function () {
  try {
    if(document.cookie.includes("ls_11=bucketed")) {
      return false;
    } else {
      return true;
    }
  }
  catch (err) {
  }
}

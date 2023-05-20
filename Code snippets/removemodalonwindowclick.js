window.addEventListener("click", function(event) {
    if (this.document.querySelector(".search_section_container")) {
      let searchElement = document.querySelector(".search_section_container");
      let searchElement_2 = document.querySelector(".desktop_search .location_logo > svg");
      let targetElement = event.target;
      if (searchElement.contains(targetElement) || searchElement_2.contains(targetElement)) {
        console.log("inside of modal");
        // event.stopPropagation();
      } else {
        searchElement.style.display = "none";
        this.document.querySelector(".desktop_search .location_logo > svg:nth-child(2)").style.display = "none";
        console.log("Window clicked");
      }
    }
  });

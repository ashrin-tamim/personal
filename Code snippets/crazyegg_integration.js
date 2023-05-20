/*Crazyegg integration start.....*/

(function pollForCrazyEgg() {
  if (document.querySelector("head")) {
    var script = document.createElement("script");
    script.src = "https://script.crazyegg.com/pages/scripts/0115/1016.js";
    script.async = "async";
    document.head.appendChild(script);
    script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.innerHTML = 'var CE_SNAPSHOT_NAME = "UXA Landing Page - Redesign";';
    document.head.appendChild(script);
  } else {
    setTimeout(pollForCrazyEgg, 25);
  }
})();

/*Crazyegg integration start.....*/

(function pollForCrazyEgg(){
	if(document.querySelector("head")) {
        var script = document.createElement('script')
        script.src = 'https://script.crazyegg.com/pages/scripts/0115/1016.js'
        script.async = 'async'
        document.head.appendChild(script);

        script = document.createElement('script')
        script.innerHTML = 'var CE_SNAPSHOT_NAME = "UXA Landing Page Variation 1";'
        document.head.appendChild(script);
	} else {
        setTimeout(pollForCrazyEgg, 25)
	}
})();

/* Crazyegg integration end.....*/


function waitForElem(
	waitFor,
	callback,
	minElements = 1,
	isVariable = false,
	timer = 10000,
	frequency = 25
) {
	let elements = isVariable
		? window[waitFor]
		: document.querySelectorAll(waitFor);
	if (timer <= 0) return;
	(!isVariable && elements.length >= minElements) ||
	(isVariable && typeof window[waitFor] !== "undefined")
		? callback(elements)
		: setTimeout(
				() =>
					waitForElem(
						waitFor,
						callback,
						minElements,
						isVariable,
						timer - frequency
					),
				frequency
		  );
}

waitForElem(
	"ga",
	(ga) => {
		if (ga) {
			// ga("create", "UA-121918463-3");
			setTimeout(() => {
				let tracker = ga.getAll()[0];
				console.log(tracker);
				document.addEventListener("click", (e) => {
					console.log(e.target.closest(".vehicle_container"));
					if (e.target.closest(".vehicle_container")) {
						const title = e.target
							.closest(".vehicle_container")
							?.querySelector(".vehicle_title")?.textContent;
						console.log("window.ga", window.ga);
						tracker.send(
							"event",
							"Click Goal",
							"Click Action",
							`User clicked on the tile: ${title}`
						);
					}
				});
			}, 10000);
		}
	},
	1,
	true
);

waitForElem(
	"ga",
	(ga) => {
		if (ga) {
			console.log(ga);
			ga("create", "UA-121918463-3");
			document.addEventListener("click", (e) => {
				console.log(e.target.closest(".vehicle_container"));
				if (e.target.closest(".vehicle_container")) {
					const title = e.target
						.closest(".vehicle_container")
						?.querySelector(".vehicle_title")?.textContent;
					console.log("window.ga", window.ga);
					ga("send", {
						hitType: "event",
						eventCategory: "ab-test-otd",
						eventAction: "click",
						eventLabel: `dsa-advisor-detail`,
					});
				}
			});
		}
	},
	1,
	true
);
(function poll(){
	if(window.ga != undefined && typeof window.ga.getAll == 'function'){
		let tracker = ga.getAll()[0];
				document.addEventListener("click", (e) => {
					console.log(e.target.closest(".vehicle_container"));
					if (e.target.closest(".vehicle_container")) {
						const title = e.target
							.closest(".vehicle_container")
							?.querySelector(".vehicle_title")?.textContent;
						tracker.send(
							"event",
							"Click Goal",
							"Click Action",
							'User clicked'
						);
					}
				});
		
	} else {
		setTimeout(poll, 50)
	}
})()

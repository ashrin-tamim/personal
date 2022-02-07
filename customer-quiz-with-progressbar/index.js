window.onload = function () {
	var quizButton = document.querySelector("#quiz_button");
	quizButton.addEventListener("click", function() {
		var startQuizButtonFinder = document.querySelector(".start_quiz_button_container");
		startQuizButtonFinder.style.display = "none";
		
		var mainContainer = document.querySelector("#main_container");
		mainContainer.style.display = "grid";
		var currentTab = 0; 
		showTab(currentTab);
	
		function showTab(n) {
			var x = document.getElementsByClassName("tab");
			x[n].style.display = "block";
			x[n].children[0].style.display = "grid";
	
			if (n == (x.length - 1)) {
				document.getElementById("nextBtn").innerHTML = "NEXT";
			} else {
				document.getElementById("nextBtn").innerHTML = "NEXT";
			}
		}
	
		var  bullets  =  [...document.querySelectorAll('.step')];
		var currentStep = 1;
	
		bullets[currentStep - 1].classList.add('completed');
		currentStep  +=  1;
	
		var nextButton = document.querySelector("#nextBtn");
			nextButton.addEventListener("click", function() {
		bullets[currentStep  -  1].classList.add('completed');
		currentStep  +=  1;
				nextPrev(1);
				});
				
		function nextPrev(n) {
			var x = document.getElementsByClassName("tab");
		
			x[currentTab].style.display = "none";
			
			currentTab = currentTab + n;
			
			if (currentTab >= x.length) {
				
			}
			showTab(currentTab);
		}
	
		var scrollContainer = document.querySelector("#tab_2_main");
	
					scrollContainer.addEventListener("wheel", (evt) => {
							evt.preventDefault();
							scrollContainer.scrollLeft += evt.deltaY;
					});
	
		let isDown = false;
		let startX;
		let scrollLeft;
	
		scrollContainer.addEventListener('mousedown', (e) => {
			isDown = true;
			startX = e.pageX - scrollContainer.offsetLeft;
			scrollLeft = scrollContainer.scrollLeft;
			e.style.userSelect = 'none';
		});
		scrollContainer.addEventListener('mouseleave', () => {
			isDown = false;
		});
		scrollContainer.addEventListener('mouseup', () => {
			isDown = false;
		});
		scrollContainer.addEventListener('mousemove', (e) => {
			if(!isDown) return;
			e.preventDefault();
			const x = e.pageX - scrollContainer.offsetLeft;
			const walk = (x - startX); //scroll-fast
			scrollContainer.scrollLeft = scrollLeft - walk;
		});
		
		var skipButton = document.querySelector("#skip");
					skipButton.addEventListener("click", function(event) {
						event.preventDefault();
						bullets[currentStep  -  1].classList.add('completed');
			currentStep  +=  1;
					nextPrev(1);
					});
		
		var exitQuiz = document.querySelector("#exit_quiz");
		exitQuiz.addEventListener("click", function(event) {
			event.preventDefault();
			var startQuizButtonFinder = document.querySelector(".start_quiz_button_container");
				startQuizButtonFinder.style.display = "flex";
				
			mainContainer.style.display = "none";
			
			var tabs = document.querySelectorAll(".tab");
			for(var i = 0; i < tabs.length; i++) {
				tabs[i].style.display = "none";
			}
			currentTab = 0;
		});
	
	});
}







document.addEventListener('DOMContentLoaded',function() {
	function buttonEvent(element, elementClass) {
		var button = document.querySelector(element);
		// var button = document.getElementsByTagName(element)[0];
		console.log(button);
		var hover = true;
		button.addEventListener('click',function(event) {
			let x = event.clientX - button.offsetLeft;
			let y = event.clientY - button.offsetTop;
			let ripple = document.createElement('div');
			ripple.classList.add(elementClass);
			ripple.style.top = y + "px";
			ripple.style.left = x + "px";
			button.appendChild(ripple);
			setTimeout(function(){ ripple.remove() }, 500);
		});

		button.addEventListener('mousemove',function(event) {
			if(hover)
			{
				hover = false;
				let x = event.clientX - button.offsetLeft;
				let y = event.clientY - button.offsetTop;
				let ripple = document.createElement('div');
				ripple.classList.add(elementClass);
				ripple.style.top = y + "px";
				ripple.style.left = x + "px";
				button.appendChild(ripple);
				setTimeout(function(){ ripple.remove(); }, 500);
				setTimeout(function(){ hover = true; }, 100);

			}
		});	
	}

	buttonEvent('button','ripple');
	buttonEvent('button:nth-child(2)', 'ripple1');
});
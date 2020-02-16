// document.addEventListener('DOMContentLoaded',function() {
// 	var button1 = document.querySelector('button:nth-child(1)');
// 	var hover = true;
// 	button1.addEventListener('click',function(event) {
// 		let x = event.clientX - button1.offsetLeft;
// 		let y = event.clientY - button1.offsetTop;
// 		let ripple1 = document.createElement('div');
// 		ripple1.classList.add('ripple');
// 		ripple1.style.top = y + "px";
// 		ripple1.style.left = x + "px";
// 		button1.appendChild(ripple1);
// 		setTimeout(function(){ ripple1.remove() }, 300);
// 	});

// 	button1.addEventListener('mousemove',function(event) {
// 		if(hover)
// 		{
// 			hover = false;
// 			let x = event.clientX - button1.offsetLeft;
// 			let y = event.clientY - button1.offsetTop;
// 			let ripple1 = document.createElement('div');
// 			ripple1.classList.add('ripple');
// 			ripple1.style.top = y + "px";
// 			ripple1.style.left = x + "px";
// 			button1.appendChild(ripple1);
// 			setTimeout(function(){ ripple1.remove(); hover = true; }, 300);
// 			setTimeout(function(){ hover = true; }, 250);

// 		}
// 	});
// });

document.addEventListener('DOMContentLoaded',function() {
	function buttonEvent(element, elementClass) {
		var button = document.querySelector(element);
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

	buttonEvent('button:nth-child(1)','ripple');
	buttonEvent('button:nth-child(2)', 'ripple1');
});
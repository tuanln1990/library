document.addEventListener('DOMContentLoaded',function() {
	var prc = document.querySelector('span');
	var styleofPrc = getComputedStyle(prc);
	var number = document.querySelector('label');
	var widthofSpan = styleofPrc.getPropertyValue("width").substr(0, styleofPrc.getPropertyValue("width").length - 2);
	var styleofLine = getComputedStyle(document.querySelector('.line'));
	var widthofLine = styleofLine.getPropertyValue('width').substr(0,styleofLine.getPropertyValue('width').length - 2);
	var percent = widthofSpan/widthofLine * 100;
	// var prc = document.querySelector('span');
	// var number = document.querySelector('label');
	// var percent = prc.style.width.substring(0,prc.style.width.length-1);
	// console.log(percent);
	var i = 0;
	setInterval(function(){
		if(i < JSON.parse(percent))
		{
			i++;
			number.textContent = i + '%';
			prc.style.width = i + '%';
		}
	},15);
});
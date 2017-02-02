


///Ready function. Collect all.

function ready (){
	var gist=[
	{
		name: "galaxy",
		quote: "galaxy quote"
	},
	{
		name: "socio",
		quote: "socio quote"
	},
	{
		name: "atom",
		quote: "atom quote"
	},
	{
		name: "boson",
		quote: "boson quote"
	},
	{
		name: "cat",
		quote: "cat quote"
	},
	{
		name: "carving",
		quote: "carving quote"
	},
	{
		name: "axe",
		quote: "axe quote"
	},
	{
		name: "nanotube",
		quote: "nanotube quote"
	},
	{
		name: "dnarocket",
		quote: "dnarocket quote"
	},
	{
		name: "rocket",
		quote: "rocket quote"
	},
	{
		name: "cell",
		quote: "cell quote"
	},
	{
		name: "earth",
		quote: "earth quote"
	}
];

function handler(event, array){
	var tooltip = document.createElement('div');
	tooltip.classList.add('tooltip')
			var target = event.target;
			console.log(target);
			if((target.tagName == 'g')&&(target.id)){
				for (var i = 0; i <= array.length; i++) {
					if (array[i].name===target.id) {
					tooltip.setAttribute('data-description', array[i].quote);
 					target.appendChild(tooltip);
					}
				};
			}
		};
		var logo = document.getElementById("sdmm");
		var path = $("#sdmm path");
		var dots_js = document.querySelectorAll(".slider_dots");
		var dots = $(".slider_dots div");
		var svg = document.getElementById("evolution");
		var duration = 500;
		logo.addEventListener('mouseover', function(){animate({duration: duration, path: path})} );
		svg.addEventListener('mouseover', function(){handler(event,gist)});
	}

window.addEventListener("load", ready);

	///SDMM logo start

	
	function animate(options){
		var progress;
		var reverse=0;
		var start=performance.now(); 
		requestAnimationFrame(function animateCallback(timeStamp){
			var timeFraction=(timeStamp - start) / options.duration; 

			if ((timeFraction >= 1)&&(timeFraction <= 2)) {
				reverse=1;
			}

			switch (reverse) {
				case 0:
					progress = 1-timeFraction;
					break;
				case 1:
					progress = (timeFraction-1);
					break;
			}
			if (timeFraction<2) {
			draw(progress, options.path); 
			requestAnimationFrame(animateCallback);}});
	}
	
	function draw(progress, path) {
		for (var i = 0; i < path.length; ++i) {
			path[i].style.strokeDasharray = path[i].getTotalLength();
			path[i].style.strokeDashoffset = path[i].getTotalLength() * (1 - progress);

		}
	} 
	function makeEaseOut(timing){return function(timeFraction){return 1 - timing(1 - timeFraction);}}

	///SDMM logo end///

	///Dots control

		





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
		name: "dna",
		quote: "dna quote"
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
var returnedTooltip;

function handler(event, gist){
	var tooltip = document.createElement('div');
	tooltip.classList.add('tooltip');
	var target = event.target;

while((target.tagName != 'G')&&(target.tagName)){
	for (var i = 0; i < gist.length; ++i) {
	if((target.id!=='')&&(target.id==gist[i].name)){
	var currentGistId = target.id;
}
}
	if(currentGistId) break;
	target = target.parentNode;
}
if(!currentGistId) return;

returnedTooltip = showTooltip(currentGistId, event, gist); 
}

function showTooltip(currentGistId, event, gist){
	var tooltip = document.createElement('div');
	tooltip.classList.add('tooltip');
	document.body.appendChild(tooltip);
	for (var i = 0; i <= gist.length; i++) {
		if((gist[i])&&(gist[i].name===currentGistId)) tooltip.innerHTML = gist[i].quote;
	};
	tooltip.style.left = event.pageX+'px';
	tooltip.style.top = event.pageY+'px';

	return tooltip;
}
		var logo = document.getElementById("sdmm");
		var path = $("#sdmm path");
		var dots_js = document.querySelectorAll(".slider_dots");
		var dots = $(".slider_dots div");
		var svg = document.getElementById("evolution");
		var duration = 500;
		logo.addEventListener('mouseover', function(){animate({duration: duration, path: path})} );
		svg.addEventListener('mouseover', function(e){handler(e,gist)});
		svg.addEventListener('mouseout', function(){
			if(returnedTooltip){
				document.body.removeChild(returnedTooltip);
				returnedTooltip = false; //WTFFF
			}
		});
		  $('article[data-type="background"]').each(function(){
        var $paralaxObj = $(this); // Назначаем объект
        $(window).scroll(function() { //IE11 не работает
            var yOffset = -window.pageYOffset / $paralaxObj.data('speed');
            // Собираем значение координат фона вместе
            var coords = '0%'+ yOffset + '%';
            // Смещаем фон
            $paralaxObj.css({ backgroundPosition: coords });
        });
    });
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

		


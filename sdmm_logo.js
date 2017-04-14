
///Ready function. Collect all.


function ready (){
	///Onclick menu
$(".menu").click(function() {
  $('.menu').toggleClass("pushed");
});
$(".menu").click(function(){$(".navigation-list").attr("id", $(".navigation-list").attr("id") === "list-animation"? '' : "list-animation")});

if($("#national-tag")){
$("#national-tag").click(function(){$(".national-subtag").css("display", $(".national-subtag").css("display")==="none"? 'inline-block' : 'none')});
}

if($(".tag")){
$(".tag").click(function(){$(this).toggleClass('tag-active')});
}

if($("#date-button")){
$("#date-button").click(function(){$(this).toggleClass('active');
 var txt = $("#date-button").hasClass('active') ? 'From the very first' : 'Latest';
     $("#date-button").text(txt);
})
}
	///Onclick menu

	//tooltip
	    	var gist=[
	{
		name: "galaxy",
		quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis sodales tellus, sit amet iaculis ipsum sollicitudin vel. Proin blandit risus at ligula porta, id dignissim odio ornare. Proin egestas diam ac urna scelerisque, eget aliquam risus finibus. Duis fringilla tempus massa a eleifend. Aliquam erat volutpat. Nullam in urna eu sapien ornare efficitur maximus quis eros. Vestibulum enim diam, pharetra a elit id, vulputate bibendum sem. Aenean a egestas risus. Integer dignissim ex eu augue dignissim tincidunt non ac mauris. Sed nisi ipsum, suscipit sed dignissim quis, pulvinar id ipsum. Vivamus vel arcu id lorem mollis auctor ac et nulla. Nam bibendum eleifend libero, commodo condimentum dolor tristique sit amet. In tincidunt blandit bibendum. Nullam nibh urna, sodales nec euismod a, blandit sed justo. Maecenas dictum lectus vel urna tristique porttitor. Integer fermentum a augue ac mattis. Nam vitae tempor sapien, eget ultrices erat. Sed accumsan maximus justo, sit amet accumsan nisi ultricies non. Aenean scelerisque nulla leo, in lacinia nibh pellentesque sit amet. Integer lobortis, lorem id tincidunt venenatis, felis sapien elementum justo, nec hendrerit elit nisi a nunc."
	},
	{
		name: "socio",
		quote: "socio"
	},
	{
		name: "atom",
		quote: "[[*atomquote]]"
	},
	{
		name: "boson",
		quote: "[[*bosonquote]]"
	},
	{
		name: "cat",
		quote: "[[*catquote]]"
	},
	{
		name: "carving",
		quote: "[[*carvingquote]]"
	},
	{
		name: "axe",
		quote: "[[*axequote]]"
	},
	{
		name: "nanotube",
		quote: "[[*nanotubequote]]"
	},
	{
		name: "dna",
		quote: "[[*dnaquote]]"
	},
	{
		name: "rocket",
		quote: "[[*rocketquote]]"
	},
	{
		name: "cell",
		quote: "[[*cellquote]]"
	},
	{
		name: "earth",
		quote: "[[*earthquote]]"
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
	 if((tooltip.offsetWidth/2)>(event.pageX)){
   	tooltip.style.left=event.pageX;
  }	else if((tooltip.offsetWidth/2)>(window.innerWidth-event.pageX)){
  	tooltip.style.right = event.pageX + 'px';
  }else{
  	tooltip.style.left = event.pageX - (tooltip.offsetWidth/2) + 'px';
  }
  	if(((tooltip.offsetHeight)+event.pageY)<window.innerHeight){
  		tooltip.style.top = event.pageY-10-tooltip.offsetHeight+'px';
  		console.log(event.pageY+"_1_"+(tooltip.offsetHeight));

  	}
  	else{
  		tooltip.style.top = event.pageY + 'px';
  		console.log(event.pageY+"_2_"+(tooltip.offsetHeight)+"_2_"+window.innerHeight);
  	}
  
	// tooltip.style.left = event.pageX - (tooltip.offsetWidth/2) + 'px';
	// tooltip.style.top = event.pageY-10-tooltip.offsetHeight+'px';

	return tooltip;
}
		var sdmm = document.getElementById("sdmm");
		var path = $("#sdmm path");
		var dots_js = document.querySelectorAll(".slider_dots");
		var dots = $(".slider_dots div");
		var svg = document.getElementById("evolution");
		var duration = 500;
		sdmm.addEventListener('mouseover', function(){animate2({duration: duration, path: path})} );
		
		function evolutionAnimate(){
			if(svg&&logo){
		svg.addEventListener('mouseover', function(e){handler(e,gist)});
		svg.addEventListener('mouseout', function(){
			if(returnedTooltip){
				document.body.removeChild(returnedTooltip);
				returnedTooltip = false; //WTFFF
				}
			})
		}
	}

		evolutionAnimate();
		
//tooltip end


//parallax
		  $('article[data-type="background"]').each(function(){
        var $paralaxObj = $(this); 
        $(window).scroll(function() { //IE11 didn't work
            var yOffset = -window.pageYOffset / $paralaxObj.data('speed');
            var coords = '0%'+ yOffset + '%';
            $paralaxObj.css({ backgroundPosition: coords });
        });
    });
}
//parallax end 

window.addEventListener("load", ready);

	///SDMM logo start

	
	function animate2(options){
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
			draw2(progress, options.path); 
			requestAnimationFrame(animateCallback);}});
	}
	
	function draw2(progress, path) {
		for (var i = 0; i < path.length; ++i) {
			path[i].style.strokeDasharray = path[i].getTotalLength();
			path[i].style.strokeDashoffset = path[i].getTotalLength() * (1 - progress);

		}
	} 
	function makeEaseOut(timing){return function(timeFraction){return 1 - timing(1 - timeFraction);}}

	///SDMM logo end///



	///Dots control

		


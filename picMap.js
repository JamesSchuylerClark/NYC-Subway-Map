// nycsubwayphotomap
$(document).ready(function(e){
	$.getScript('js/stations.js', function() {
		for(var i=0; i<stations.length; i++){
				var loc = stations[i].loc;
				var name = stations[i].name;
				var imgName = stations[i].imgName[0];
				/*
				var link = [];
				for (var j=0; j<stations[i].imgName.length; j++) {
					link[0] = stations[i].imgName[j];
				}
				 console.log(link[0]);
				*/
				$('#subway').append('<a href="'+ imgName +'"' + 
					' title="'+ name + '" rel="prettyPhoto"' + name + '">' +
					'<area shape="circle" coords="' + loc + '"/></a>');
		}
		$("a[rel^='prettyPhoto']").prettyPhoto({
			social_tools:false,
			allow_resize:false
			});
		$('img[usemap]').rwdImageMaps();
	});
})

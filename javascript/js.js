$(document).ready(function(){
	$("#search").on("keydown", function(){
		if(event.which == 13){ 
			var url= validateUrl($(this).val());    		
		    $.getJSON("https://api.spotify.com/v1/search?q="+url+"&type=track", function(data){

		    	var template = Handlebars.compile($("#songsList").html());
		    	$(".songs").html(template({items: data.tracks.items}));
		    });
    	}
	});
});

function validateUrl(url){
	return url.split(" ").join("+");
}
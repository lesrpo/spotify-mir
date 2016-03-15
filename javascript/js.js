$(document).ready(function(){
	$("#search").on("keydown", function(){
		if(event.which == 13){ 
			var url= validateUrl($(this).val());    		
		    $.getJSON("https://api.spotify.com/v1/search?q="+url+"&type=track", function(data){
		    	if(data.tracks.items.length > 0){
			    	var template = Handlebars.compile($("#songsList").html());
			    	$(".songs").html(template({items: data.tracks.items}));
			    }else{
		    		$(".songs").html("<h3>No se encontraron resultados</h3>");
			    }
		    });
    	}
	});
});

function validateUrl(url){
	return url.split(" ").join("+");
}
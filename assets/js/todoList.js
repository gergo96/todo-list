$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(700, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event){
	if(event.which === 13){
		var content = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + 
		content + "</li>");
	}
});

$("h1 i").on("click", function(){
	$("input").fadeToggle();
});

HoverAndClick();

function HoverAndClick (){

	$("ul").on("mouseover", "li", function(){
		$(this).addClass("bold");
	});

	$("ul").on("mouseleave", "li", function(){
		$(this).removeClass("bold");
	});

	$("ul").on("click", "li", function(){
		$(this).toggleClass("completed");
	});
}

// $("li").click(function(){
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 		$(this).css({
// 			color: "black",
// 			textDecoration: "none"
// 		});
// 	}else{
// 		$(this).css({
// 			color: "gray",
// 			textDecoration: "line-through"
// 		});
// 	}
// });
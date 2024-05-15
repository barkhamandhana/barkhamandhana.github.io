
const openLightBox = function(event){
	console.log(event.target.src);

	$(".lightbox_content").html("<img src='" + event.target.src + "'>");

	$(".lightbox").addClass("active");
}



//Document Ready
$(function(){

	$("body").on("click", ".gallery img", openLightBox);

	$(".lightbox_back").on("click", function(){
		$(".lightbox").removeClass("active");
	})
});
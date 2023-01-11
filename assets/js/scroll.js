$(function() {

	var instagram = $(".instagramLink")
	//instagram.hide();
	var material = $(".wrapper").offset().top;
	$(window).scroll(function () {
        if ($(this).scrollTop() < 500) {
            instagram.fadeIn();
        }else {
            instagram.fadeOut();
        }
    });
});
    
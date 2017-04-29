$(document).ready(function() {

$('#monitor').html($(window).width());

$(window).resize(function() {
    var viewportWidth = $(window).width();
        $('#monitor').html(viewportWidth);
});

var AboutTabs = $('.AboutTabs');
var SideNav = $('.SideNav');

/**/

setTimeout(function(){
        $('#preloaderwrapper').fadeOut(3000);
    });

/**/

$(function() {
	SideNav.click(function(e){
        e.preventDefault();
		$(this).toggleClass('visible');
	})
});

SideNav.click(function(e){
    e.preventDefault();
	$('body').toggleClass('sideOpen')
});

/**/

$('.MessageBox').click(function(e){
	e.preventDefault();
	$('.backdrops').fadeIn('normal');
});

$('.CloseLightBoxButton').click(function(e){
    e.preventDefault();
	$('.backdrops').fadeOut('fast');
});

/**/

/**/

$('.tab').hide();

AboutTabs.find('a').on('click',function(e){
	e.preventDefault();
	AboutTabs.find('.active').removeClass('active');
	$(this).addClass('active');

var NewTab = $(this.hash);
var NewHeight = NewTab.height();
var TabContainer = $('.tab-content');

	NewTab.siblings(':visible').fadeOut('fast');
	TabContainer.animate({'height':NewHeight}, 100, function(){
		NewTab.fadeIn('fast');
	});

}).first().click();

/**/

$(window).scroll(function(e){
    e.preventDefault();
    if($(window).scrollTop()>200){
        $('a.BackToTop').fadeIn('slow');
    }else{
        $('a.BackToTop').fadeOut('fast');
    }
});

$('a.BackToTop').click(function(e){
    e.preventDefault();
    $('html,body').animate({
        scrollTop:0
    },1000);
    return false;
});

/**/

$('ul#filter a').click(function(e) {
    e.preventDefault();
	$(this).css('outline','none');
	$('ul#filter .current').removeClass('current');
	$(this).parent().addClass('current');

	var filterVal = $(this).text().toLowerCase().replace(' ','-');

	if(filterVal == 'all') {
		$('#PortfolioCreation #PortfolioCreationEach.hidden').fadeIn('fast').removeClass('hidden');
	} else {
		$('#PortfolioCreation #PortfolioCreationEach').each(function() {
			if(!$(this).hasClass(filterVal)) {
				$(this).fadeOut('fast').addClass('hidden');
			} else {
				$(this).fadeIn('fast').removeClass('hidden');
			}
		});
	}

	return false;
});


/**/

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
var $closemodal =$('<a class="closer">x</a>');

$overlay.append($image);
$overlay.append($closemodal);
$overlay.append($caption);
$("body").append($overlay);

$("#PortfolioCreation a").click(function(e){
    e.preventDefault();
    var imageLocation = $(this).attr("href");
    $image.attr("src", imageLocation);
    $('#preloaderwrapper').css('opacity', 0.5);
    $('#preloaderwrapper').fadeIn('fast').delay(1400).fadeOut(500);
    $overlay.delay(1400).fadeIn(1000);

    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);

    $overlay.click(function(e){
        e.preventDefault();
        $overlay.fadeOut('fast');
    });

});

});



$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: false,
		autoplay: true,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	})
});



$('.play').on('click', function () {
	owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
	owl.trigger('stop.owl.autoplay')
})

var menu = document.querySelector("#fa-bars");
var x = document.querySelector(".menu ul");

menu.onclick = () => {
	menu.classList.toggle("fa-times");
	x.classList.toggle("menujs");
	menu.style.border="2px solid #003375";
}

window.onclick = function(e) {
    if (e.target == menu) {
		menu.style.border = "2px solid #003375";
    }

	else {
		menu.style.border = "none";
    }
}


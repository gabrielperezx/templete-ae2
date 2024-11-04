window.addEventListener('load', () => {
	const gliderConfig = {
		slidesToShow: 2,
		slidesToScroll: 1,
		rewind: true,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
		],
	};

	document.querySelectorAll('.carousel__items').forEach((carousel) => {
		const prevButton = carousel.parentElement.querySelector('.carousel__anterior');
		const nextButton = carousel.parentElement.querySelector('.carousel__siguiente');

		new Glider(carousel, {
			...gliderConfig,
			arrows: {
				prev: prevButton,
				next: nextButton,
			},
		});
	});
});

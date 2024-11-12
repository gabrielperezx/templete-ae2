const monthYearElement = document.getElementById('monthYear'),
	datesElement = document.getElementById('dates'),
	prevBtn = document.getElementById('prevBtn'),
	nextBtn = document.getElementById('nextBtn');

let currentDate = new Date();

const updateCalendar = () => {
	const currentYear = currentDate.getFullYear(),
		currentMonth = currentDate.getMonth();

	// const firstDay = new Date(currentYear, currentMonth, 1).getDay(),
	// 	lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();

	const firstDay = new Date(currentYear, currentMonth, 0),
		lastDay = new Date(currentYear, currentMonth + 1, 0),
		totalDays = lastDay.getDate(),
		firstDayIndex = firstDay.getDay(),
		lastDayIndex = lastDay.getDay();

	const monthYearString = currentDate.toLocaleString('default', {
		month: 'long',
		year: 'numeric',
	});
	monthYearElement.textContent = monthYearString;

	let datesHTML = '';

	for (let i = firstDayIndex; i > 0; i--) {
		const prevDate = new Date(currentYear, currentMonth, 0 - i + 1);
		datesHTML += `<div class="calendar__date inactive">${prevDate.getDate()}</div>`;
	}

	for (let i = 1; i <= totalDays; i++) {
		const date = new Date(currentYear, currentMonth, i);
		const activeClass = date.toDateString() === new Date().toDateString() ? 'active' : '';
		datesHTML += `<div class="calendar__date ${activeClass}">${i}</div>`;
	}

	for (let i = 1; i <= 7 - lastDayIndex; i++) {
		const nextDate = new Date(currentYear, currentMonth + 1, i);
		datesHTML += `<div class="calendar__date inactive">${nextDate.getDate()}</div>`;
	}

	datesElement.innerHTML = datesHTML;
};

prevBtn.addEventListener('click', () => {
	currentDate.setMonth(currentDate.getMonth() - 1);
	updateCalendar();
});

nextBtn.addEventListener('click', () => {
	currentDate.setMonth(currentDate.getMonth() + 1);
	updateCalendar();
});

window.addEventListener('load', () => {
	const gliderConfig = {
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 577,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
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

	updateCalendar();
});

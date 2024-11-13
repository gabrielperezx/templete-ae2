(function () {
	/*----- ----- ----- ----- -----
	# Funciones
	----- ----- ----- ----- -----*/

	function Calendario() {
		const checkCalendario = document.querySelector('.calendar');
		if (document.body.contains(checkCalendario)) {
			const monthYearElement = document.getElementById('monthYear'),
				datesElement = document.getElementById('dates'),
				prevBtn = document.getElementById('prevBtn'),
				nextBtn = document.getElementById('nextBtn');

			let currentDate = new Date();

			const updateCalendar = () => {
				const currentYear = currentDate.getFullYear(),
					currentMonth = currentDate.getMonth();

				const firstDay = new Date(currentYear, currentMonth, 1),
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
					const prevDate = new Date(currentYear, currentMonth, -i + 1);
					datesHTML += `<div class="calendar__date inactive">${prevDate.getDate()}</div>`;
				}

				for (let i = 1; i <= totalDays; i++) {
					const date = new Date(currentYear, currentMonth, i);
					const activeClass =
						date.toDateString() === new Date().toDateString() ? 'active' : '';
					datesHTML += `<div class="calendar__date ${activeClass}">${i}</div>`;
				}

				for (let i = 1; i <= 6 - lastDayIndex; i++) {
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

			updateCalendar();
		}
	}

	function LightBox() {
		const checkGaleria = document.querySelector('.gallery');
		if (document.body.contains(checkGaleria)) {
			// JavaScript para manejar la navegación en el Lightbox
			const images = document.querySelectorAll('.gallery img');
			const lightboxImage = document.getElementById('lightboxImage');
			let currentIndex = 0;

			// Función para actualizar la imagen del lightbox
			function updateLightboxImage(index) {
				lightboxImage.src = images[index].src;
				currentIndex = index;
			}

			// Abre el modal y muestra la imagen seleccionada
			images.forEach((image, index) => {
				image.addEventListener('click', () => {
					updateLightboxImage(index);
				});
			});

			// Navegación hacia la derecha
			document.getElementById('nextBtn').addEventListener('click', () => {
				if (currentIndex < images.length - 1) {
					updateLightboxImage(currentIndex + 1);
				} else {
					updateLightboxImage(0); // Vuelve al inicio si está en la última imagen
				}
			});

			// Navegación hacia la izquierda
			document.getElementById('prevBtn').addEventListener('click', () => {
				if (currentIndex > 0) {
					updateLightboxImage(currentIndex - 1);
				} else {
					updateLightboxImage(images.length - 1); // Vuelve a la última imagen si está en la primera
				}
			});
		}
	}

	/*----- ----- ----- ----- -----
	# Declaraciones
	----- ----- ----- ----- -----*/

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

		Calendario();
		LightBox();
	});
})();

// const checkClass = document.querySelector('.class');
// if (document.body.contains(checkClass)) {
// }

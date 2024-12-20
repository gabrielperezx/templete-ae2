(function () {
    /*----- ----- ----- ----- -----
	# Funciones
	----- ----- ----- ----- -----*/

    const Calendario = () => {
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
                    const prevDate = new Date(
                        currentYear,
                        currentMonth,
                        -i + 1,
                    );
                    datesHTML += `<div class="calendar__date inactive">${prevDate.getDate()}</div>`;
                }

                for (let i = 1; i <= totalDays; i++) {
                    const date = new Date(currentYear, currentMonth, i);
                    const activeClass =
                        date.toDateString() === new Date().toDateString()
                            ? 'active'
                            : '';
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
    };

    const LightBox = () => {
        const checkGaleria = document.querySelector('.gallery');
        if (document.body.contains(checkGaleria)) {
            // JavaScript para manejar la navegación en el Lightbox
            const images = document.querySelectorAll('.gallery img');
            const lightboxImage = document.getElementById('lightboxImage');
            let currentIndex = 0;

            // Función para actualizar la imagen del lightbox
            const updateLightboxImage = (index) => {
                lightboxImage.src = images[index].src;
                currentIndex = index;
            };

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
    };

    const AlertaBienvenido = () => {
        const checkInicio = document.getElementById('VentanaInicio');
        if (document.body.contains(checkInicio)) {
            Swal.fire({
                title: '¡Bienvenidos!',
                text: 'Waos',
                showCloseButton: true,
                confirmButtonText: 'Aceptar',
                confirmButtonAriaLabel: 'Boton aceptar',
                customClass: {
                    title: 'text-start h5 fw-bold',
                    confirmButton:
                        'btn btn-primary text-white fw-bold rounded-pill px-4 fs-7',
                    actions: 'w-100 justify-content-end px-4',
                    popup: 'rounded-4',
                },
            });
        }
    };

    const MenuEstatico = () => {
        document.addEventListener('DOMContentLoaded', () => {
            const navbar = document.getElementById('mainNavbar');
            const offsetTop = navbar.offsetTop; // Obtiene la posición inicial de la barra
            window.addEventListener('scroll', () => {
                if (window.scrollY > offsetTop) {
                    navbar.classList.add('navbar-fixed');
                    navbar.classList.remove('d-none');
                } else {
                    navbar.classList.remove('navbar-fixed');
                    navbar.classList.add('d-none');
                }
            });
        });
    };

    const BotonScrollTop = () => {
        const checkBoton = document.querySelector('.btnScrollTop');
        if (document.body.contains(checkBoton)) {
            window.addEventListener('scroll', () => {
                if (
                    document.body.scrollTop > 20 ||
                    document.documentElement.scrollTop > 20
                ) {
                    checkBoton.classList.remove('d-none');
                    checkBoton.classList.add('d-block');
                } else {
                    checkBoton.classList.remove('d-block');
                    checkBoton.classList.add('d-none');
                }
            });

            checkBoton.addEventListener('click', () => {
                document.body.scrollTop = 0; // For Safari
                document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            });
        }
    };

    const GliderCreator = () => {
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
            const prevButton = carousel.parentElement.querySelector(
                '.carousel__anterior',
            );
            const nextButton = carousel.parentElement.querySelector(
                '.carousel__siguiente',
            );

            new Glider(carousel, {
                ...gliderConfig,
                arrows: {
                    prev: prevButton,
                    next: nextButton,
                },
            });
        });
    };

    const CarouselSVG = () => {
        const images = document.querySelectorAll('.carousel-svg__images img');
        const dots = document.querySelectorAll('.carousel-svg__dots button');
        let currentIndex = 0;

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel();
            });
        });

        function updateCarousel() {
            images.forEach((img, index) => {
                img.classList.toggle('active', index === currentIndex);
            });
            dots.forEach((dot) => dot.classList.remove('active'));
            dots[currentIndex].classList.add('active');
        }
    };

    /*----- ----- ----- ----- -----
	# Declaraciones
	----- ----- ----- ----- -----*/

    window.addEventListener('load', () => {
        GliderCreator();
        Calendario();
        LightBox();
        // AlertaBienvenido();
        BotonScrollTop();
        CarouselSVG();
    });
    MenuEstatico();
})();

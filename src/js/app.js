window.addEventListener('load', () => {
    new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 3,
        slidesToScroll: 1,
        rewind: true,
        arrows: {
            prev: '.notice-prev',
            next: '.notice-next',
        },
    });
    new Glider(document.querySelector('.carousel__info'), {
        slidesToShow: 3,
        slidesToScroll: 1,
        rewind: true,
        arrows: {
            prev: '.info-prev',
            next: '.info-next',
        },
    });
    new Glider(document.querySelector('.carousel__gallery'), {
        slidesToShow: 3,
        slidesToScroll: 1,
        rewind: true,
        arrows: {
            prev: '.gallery-prev',
            next: '.gallery-next',
        },
    });
    new Glider(document.querySelector('.carousel__team'), {
        slidesToShow: 3,
        slidesToScroll: 1,
        rewind: true,
        arrows: {
            prev: '.team-prev',
            next: '.team-next',
        },
    });
});

//HEADER MENU START
const headerMenu = document.querySelector('.header__menu');

document.addEventListener('click', menu);

function menu(event) {

    if (headerMenu.classList.contains('open')) {

        if (!event.target.closest('.header__menu')) {

            closeMenu();
        }

        if (event.target.closest('.header__maenu-btn')) {

            closeMenu();
        }
    }

    else {
        if (event.target.closest('.header__maenu-btn')) {

            openMenu();
        }

    }

}

function openMenu() {
    headerMenu.classList.add('open');
}

function closeMenu() {
    headerMenu.classList.remove('open');
}


//HEADER MENU FINISH




//FORM IN SECTION-TOP START
const inputTop = document.querySelector('.section-top__input-text');
const buttonTop = document.querySelector('.section-top__input-search');
const textTop = document.querySelector('.section-top__text').innerHTML;

buttonTop.addEventListener('click', function (event) {
    event.preventDefault();

    let inputVelue = inputTop.value;

    if (inputVelue.indexOf('Enter text') === -1) {
        if (inputVelue !== "") {
            if (textTop.indexOf(inputVelue) === -1) {
                inputTop.style.backgroundColor = 'red';
            }

            if (textTop.indexOf(inputVelue) !== -1) {
                inputTop.style.backgroundColor = '#D1FAE5';
            }
        }

        else {

            inputTop.style.backgroundColor = '#FFFFFF';
            inputTop.value = 'Enter text';

        }
    }

});

//FORM IN SECTION-TOP FINISH



//TOP-BANNER START

$(document).ready(function () {
    $('.section-top-banner__slick').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 830,
                settings: {
                    centerMode: true,
                    infinite: true,
                }
            }
        ]
    });
});

//TOP-BANNER FINISH


//RECOMMENDATION START

$(document).ready(function () {
    $('.recommendation__slick').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: true,
        appendArrows: $('.recommendation__slick-dots'),
        waitForAnimate: false,
    });

    //button prev and next START

    $('.recommendation__slick-dots-previous').click(function (event) {
        $('.recommendation__slick').slick('slickPrev');
    });

    $('.recommendation__slick-dots-next').click(function (event) {
        $('.recommendation__slick').slick('slickNext');
    });




    const slickPrev = document.querySelectorAll('.slick-prev');
    const slickNext = document.querySelectorAll('.slick-next');
    const recomDotsPrevious = document.querySelector('.recommendation__slick-dots-previous');
    const recomDotsNext = document.querySelector('.recommendation__slick-dots-next');



    function toggleClassDots() {
        slickPrev.forEach(function (elem) {
            let recomSlickDots = document.querySelector('.slick-disabled');


            let w = 0;
            if (elem.classList.contains('slick-disabled')) {
                let recomSlickDotsParent = recomSlickDots.parentNode;

                if (recomSlickDotsParent.classList.contains('recommendation__slick-dots')) {

                    recomDotsPrevious.classList.add('active');
                    w++;
                }
            }

            if (w == 0) {
                slickNext.forEach(function (el) {
                    if (el.classList.contains('slick-disabled')) {
                        let recomSlickDotsParent = recomSlickDots.parentNode;

                        if (recomSlickDotsParent.classList.contains('recommendation__slick-dots')) {
                            recomDotsNext.classList.add('active');
                        }
                    }

                    else {
                        recomDotsPrevious.classList.remove('active');
                        recomDotsNext.classList.remove('active');
                    }
                });
            }
        });
    };

    toggleClassDots();

    $('.recommendation__slick').on('afterChange', function () {

        toggleClassDots();

    });

    //button prev and next FINISH




    // FILTER START

    const recomFilter = document.querySelectorAll('.recommendation__filter');
    function removeClass(recomFilter) {
        recomFilter.forEach(function (elem) {

            elem.classList.remove('active')

        });

    };



    let filtered = false;

    $('.recommendation__filter--house').on('click', function () {

        if (filtered === true) {
            $('.recommendation__slick').slick('slickUnfilter');
            filtered = false;

            removeClass(recomFilter);

            let parent = $(this);
            parent.addClass('active');
        }
    });



    $('.recommendation__filter--villa').on('click', function () {

        if (filtered === true) {
            $('.recommendation__slick').slick('slickUnfilter');
            filtered = false;

            removeClass(recomFilter);

            let parent = $(this);
            parent.addClass('active');
        }

        if (filtered === false) {
            $('.recommendation__slick').slick('slickFilter', '.villa');
            filtered = true;

            removeClass(recomFilter);

            let parent = $(this);
            parent.addClass('active');

        }
    });

    $('.recommendation__filter--apertment').on('click', function () {

        if (filtered === true) {
            $('.recommendation__slick').slick('slickUnfilter');
            filtered = false;

            removeClass(recomFilter);
        }


        if (filtered === false) {
            $('.recommendation__slick').slick('slickFilter', '.apartment');
            filtered = true;

            removeClass(recomFilter);

            let parent = $(this);
            parent.addClass('active');
        }
    });


    // FILTER FINISH
});

//RECOMMENDATION FINISH




//REVIEW START


$(document).ready(function () {
    $('.review__slick').slick({
        // infinite: true,
        slidesToShow: 1,
        // slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '56px',

    });
});


//REVIEW  FINISH



//POPUP START


const linkPopup = document.querySelector('.ready__two-vidio-link');
const popup = document.querySelector('.popup');
const popupVideo = document.getElementById('popupVideo');


document.addEventListener('click', closePopup);

function closePopup(event) {
    if (popup.classList.contains('open')) {
        if (event.target.closest('.popup__close-background')) {
            popup.classList.remove('open');
            popupVideo.pause();
        }

        if (!event.target.closest('.popup__content-box')) {
            popup.classList.remove('open');
            popupVideo.pause();
        };

    }

    if (event.target.closest('.ready__two-vidio-link')) {
        event.preventDefault();
        popup.classList.add('open');
        popupVideo.play();

    }
}


//POPUP FINISH



// SUBSCRIBE START

const form = document.querySelector('.subscribe__form');
const inputEmail = document.getElementById('email');
const buttonSubsribe = document.querySelector('.subscribe__input-search');


form.addEventListener('submit', formSend);

function formSend(event) {
    event.preventDefault();

    let error = validateInput();

    if (error == 0) {
        console.log('this form sended');

        localStorage.setItem('email', JSON.stringify(inputEmail.value));

        form.reset();
        form.classList.add('active');

    }

}




function validateInput() {
    let regEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

    return validate(regEmail, inputEmail);
}



function validate(regex, elem) {
    let i = 0;
    if (regex.test(elem.value)) {
        valid(inputEmail);
    }
    else {
        notValid(inputEmail);
        i++;
    }

    return i;

}



function notValid(input) {
    input.classList.add('active');
}

function valid(input) {
    input.classList.remove('active');
}





//test local Storage start

let locStorEmail = localStorage.getItem('email');


if (locStorEmail !== null) {

    form.classList.add('active');
}

else {
    form.classList.remove('active');
}


// test local Storage finish


//SUBSCRIBE FINISH



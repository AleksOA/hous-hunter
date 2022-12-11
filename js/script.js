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
        arrows: false
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
        waitForAnimate: false
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
                console.log('IF2')
                slickNext.forEach(function (el) {
                    if (el.classList.contains('slick-disabled')) {
                        let recomSlickDotsParent = recomSlickDots.parentNode;

                        if (recomSlickDotsParent.classList.contains('recommendation__slick-dots')) {
                            console.log('OK')
                            recomDotsNext.classList.add('active');
                        }
                    }

                    else {
                        console.log('SSSSSSSSS');
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









//VIDEO START

const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

function onPlayerReady(event) {
    event.target.playVideo();
}



//VIDEO FIHISH

//POPUP START


const linkPopup = document.querySelector('.ready__two-vidio-link');
const popup = document.querySelector('.popup');


document.addEventListener('click', closePopup);

function closePopup(event) {
    if (popup.classList.contains('open')) {
        if (event.target.closest('.popup__close-background')) {
            popup.classList.remove('open');
            player.pauseVideo();
        }

        if (!event.target.closest('.popup__content-box')) {
            popup.classList.remove('open');
            player.pauseVideo();
        };

    }

    if (event.target.closest('.ready__two-vidio-link')) {
        if (player) {
            console.log('if3')
            event.preventDefault();
            popup.classList.add('open');
        }
        else {
            event.preventDefault();
            popup.classList.add('open');


            player = new YT.Player('player', {
                videoId: 'st7r6Tq0YFw',
                playerVars: {
                    'playsinline': 1
                },
                events: {
                    'onReady': onPlayerReady,
                }
            });


        }

    }
}


//POPUP FINISH



// SUBSCRIBE START

//test cookie start
const cookie = document.cookie;
console.log(cookie)




//test cookie fihish









const form = document.querySelector('.subscribe__form');
const inputEmail = document.getElementById('email');
const buttonSubsribe = document.querySelector('.subscribe__input-search');


form.addEventListener('submit', formSend);

function formSend(event) {
    event.preventDefault();

    let error = validateInput();

    if (error == 0) {
        console.log('this form sended');


        document.cookie = `email_${inputEmail.value} = ${inputEmail.value}; expires=Sun, 16 Jul 3567 06:23:41 GMT`;

        // docCookies.setItem("email", "${inputEmail.value}", 864e2, "/");

        gtag('config', 'MEASUREMENT_ID', {
            'email': 'email'
        });

        form.reset();
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



//SUBSCRIBE FINISH



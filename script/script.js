$(document).ready(function () {
    $('#fullpage').fullpage({ //initialize
        //set options
        sectionsColor: ['#03A9F4', '#03A9F4', '#03A9F4', '#03A9F4'],
        navigation: false,
        //autoScrolling: false,
        scrollingSpeed: 0,
        anchors: ['section1', 'section2', 'section3', 'section4'],
        afterLoad: function (origin, destination, direction) {
            if (destination.index == 1) { //section 2
                navBar.play();
                titleNsub.play();
                level1Title.play();
                bicycle.play();
                car.play();
                plane.play();
                Footer.play();
            } else if (destination.index == 2) { //section 3
                QuiztitleNsub.play();
                bWheel.play();
                quizBtn.play();
                Footers.play();
            }else if (destination.index == 3) { //section 4
                QuiztitleNsub.play();
                bWheel.play();
                quizBtn.play();
                CarFooters.play();
                cWheel.play();
            }
        }
    });
    $.fn.fullpage.setMouseWheelScrolling(false);
    $.fn.fullpage.setAllowScrolling(false);
    $(".usernameBtn").click(function () {
        if($(".nameTxt").val() != ""){
            $(".username").text("Hello, " + $(".nameTxt").val() + "!");
        }else{
            $(".username").text("Hello, Guest!");
        }
        
    });
    anime({
        targets: '#Balloon',
        translateY: -20,
        loop: true,
        easing: 'easeInOutSine',
        direction: 'alternate',
        autoplay: true
    });
    
    anime({
        targets: '.section1Stagger',
        scale: [0.01, 1],
        duration: 1000,
        delay: anime.stagger(100),
        autoplay: true
    });
    var navBar = anime({
        targets: '.section2Nav',
        translateX: 1450,
        delay: 300,
        autoplay: true
    });
    var titleNsub = anime({
        targets: '.titleNsub',
        translateY: -150,
        delay: 300,
        duration: 1000,
        autoplay: true
    })
    var level1Title = anime({
        targets: '.level1Title',
        translateY: 60,
        delay: 600,
        duration: 1000
    });
    var bicycle = anime({
        targets: '.bicycle',
        translateY: 80,
        delay: 800,
        duration: 1000
    });
    var car = anime({
        targets: '.car',
        translateY: 105,
        delay: 800,
        duration: 1000
    });
    var plane = anime({
        targets: '.plane',
        translateY: 105,
        delay: 800,
        duration: 1000
    });
    var Footer = anime({
        targets: '.footer',
        translateY: 280,
        delay: 300,
        duration: 1000
    });
    var QuiztitleNsub = anime({
        targets: '.QuiztitleNsub',
        translateY: -110,
        delay: 300,
        duration: 1000,
        autoplay: true
    })
    
    var bWheel = anime({
        targets: '.bikeWheel',
        rotate: '360',
        easing: 'linear',
        loop: true
    });
    var quizBtn = anime({
        targets: '#quiz-start-btn',
        translateY: 120,
        delay: 300,
        duration: 1000,
        autoplay: true
    })
    var Footers = anime({
        targets: '.footers',
        translateY: 220,
        delay: 300,
        duration: 1000
    });
    var cWheel = anime({
        targets: '.carWheel',
        rotate: '360',
        easing: 'linear',
        loop: true
    });
    var CarFooters = anime({
        targets: '.carFooter',
        translateY: 250,
        delay: 300,
        duration: 1000
    });


    tippy('.section1Tip', {
        content: "<strong>Quizzy is an online quiz app that aims to test children’s knowledge on parts and anatomies of vehicles.</strong>",
        followCursor: false,
        placement: 'bottom',
        allowHTML: true
    });
    tippy('.share', {
        content: "Share this quiz",
        followCursor: false,
        placement: 'left',
        allowHTML: true
    });
    tippy('.username', {
        content: "Change username",
        followCursor: false,
        placement: 'bottom',
        allowHTML: true
    });
    tippy('.level1Card', {
        content: "Click to Play",
        followCursor: true,
        placement: 'top',
        allowHTML: true
    });
    tippy('.level2', {
        content: "Complete level 1 to unlock",
        followCursor: true,
        placement: 'top',
        allowHTML: true
    });
    tippy('.level3', {
        content: "Complete level 2 to unlock",
        followCursor: true,
        placement: 'top',
        allowHTML: true
    });
    tippy('.bikeWheel', {
        content: "Bicycle Wheel",
        followCursor: true,
        placement: 'top',
        allowHTML: true
    });
    tippy('.bikeBody', {
        content: "Bicycle Frame",
        followCursor: true,
        placement: 'top',
        allowHTML: true
    });
    tippy('.carWheel', {
        content: "Car Wheel",
        followCursor: true,
        placement: 'top',
        allowHTML: true
    });

    //Bicycle quiz
    $('#quiz').quiz({
        //resultsScreen: '#results-screen',
        //counter: false,
        homeButton: '#custom-home',
        counterFormat: 'Question %current of %total',
        allowIncorrect: false,
        questions: [
          {
            'q': 'How many wheel does a bicycle have?',
            'options': [
              '1',
              '2',
              '3',
              '4'
            ],
            'correctIndex': 1,
            'correctResponse': 'Correct!',
            'incorrectResponse': 'Oh no, that is incorrect!'
          },
          {
            'q': 'Which of the following is a bicycle part?',
            'options': [
              'Bumpers',
              'Paddle',
              'Propeller',
              'Grillies'
            ],
            'correctIndex': 1,
            'correctResponse': 'Correct!',
            'incorrectResponse': 'Oh no, that is incorrect!'
          },
          {
            'q': 'Which type of safety equipment you should wear when riding bicycle?',
            'options': [
              'Safety Helmet',
              'Safety Boots',
              'Safety Goggles',
              'Safety Vest'
            ],
            'correctIndex': 0,
            'correctResponse': 'Correct!',
            'incorrectResponse': 'Oh no, that is incorrect!'
          },
          {
            'q': 'What type of cloths should you wear when riding bicycle?',
            'options': [
                'Dark Cloths',
                'Baseball Cap',
                'Bright Coloured Cloths',
                'Headband'
            ],
            'correctIndex': 2,
            'correctResponse': 'Correct!',
            'incorrectResponse': 'Oh no, that is incorrect!'
          },
          {
            'q': 'Which bicycle part is important to help make you visible to driver of cars?',
            'options': [
              'Gears',
              'Reflector',
              'Brakes',
              'Tires'
            ],
            'correctIndex': 1,
            'correctResponse': 'Correct!',
            'incorrectResponse': 'Oh no, that is incorrect!'
          }
        ]
      });
      
      $("#quiz-finish-btn").click(function () {
            $('.level2').css('opacity', '1.0');
            $(".level2Link").attr("href", "#section4");
            $(".level2Lock").removeClass("bi-lock");
            $(".level2Lock").addClass("bi-play");
            
    });

    
});
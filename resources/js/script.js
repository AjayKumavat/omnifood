/* -------------------------------------------------------------------------------------- */
/* FOR THE STICKY NAVIGATION */
/* -------------------------------------------------------------------------------------- */

/* this ensures that the code will run after the document has been loaded */
$(document).ready(function() {
    
    /* direction is a parameter from which we'll know that in which direction user is scrolling the webpage down or up */
    $('.js--section-features').waypoint(function(direction) {
        
        if (direction == "down") {    
            $('nav').addClass('sticky');    
        } else {
            $('nav').removeClass('sticky');
        }
        
    }, {
        
        offset: '60px;'/* sticky navigation will be viewed before 60px of section features */
        
    });
    

    /* -------------------------------------------------------------------------------------- */
    /* SCROLL ON BUTTONS */
    /* -------------------------------------------------------------------------------------- */
    
    /* Scroll to price plan section */
    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
    });
    
    /* Scroll to features section */
    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
    });
    
    
    /* -------------------------------------------------------------------------------------- */
    /* NAVIGATION SCROLL */
    /* -------------------------------------------------------------------------------------- */
    
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    
    /* -------------------------------------------------------------------------------------- */
    /* ANIMATION ON SCROLL */
    /* -------------------------------------------------------------------------------------- */
    
    /* Features Section(fadeIn) */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    },{
        offset: '50%' /* semicolon is not required here */    
    });
    
    /* How it works Section(fadeInUp) */
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    },{
        offset: '50%' /* semicolon is not required here */    
    });
    
    /* Cities Section(fadeIn) */
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    },{
        offset: '50%' /* semicolon is not required here */    
    });
    
    /* Price plan Section(pulse) */
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    },{
        offset: '50%' /* semicolon is not required here */    
    });
    
    
    /* -------------------------------------------------------------------------------------- */
    /* MOBILE NAVIGATION */
    /* -------------------------------------------------------------------------------------- */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200); /* 0.2seconds = 200 milliseconds */
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
        /* NOTE: while adding and removeing class doesn't requeired .(period)  */
    });
    
    
})
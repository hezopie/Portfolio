// JavaScript Document

/* slows back to top scroll */
$('.back-top a').click(function() {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    return false;
});
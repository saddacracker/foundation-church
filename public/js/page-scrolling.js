// This is only loaded on the welcome/home page since that's the only page we do the scrolling thingie
// Yes it's a hack. A better solution would be to use clever routing

// Mostly stolen from http://alijafarian.com/responsive-page-scrolling-with-jquery-and-bootstrap/

$(document).ready(function() {
    
    if (document.location.hash) {
        
        // Update nav if user came from another page
        
        $('.navbar-nav li').removeClass("active");
        $("a[data-id='" + document.location.hash +"']").parent().addClass("active");
    }
    
    // navigation click actions
    
    $('.scroll-link').on('click', function(event){
        event.preventDefault();
        var sectionID = $(this).attr("data-id");
        scrollToID(sectionID, 750);
        
        // update active class
        $('.navbar-nav li').removeClass("active");
        $(this).parent().addClass("active");
    });
    
    // collapse menu
    $('.nav a').on('click', function(){
        if ($(document).width() <= 767){
            $(".navbar-toggle").click();
        }
    });
    
    
    // @TODO: scroll to top action
    // $('.scroll-top').on('click', function(event) {
    //     event.preventDefault();
    //     $('html, body').animate({scrollTop:0}, 'slow');
    // });
    // // mobile nav toggle
    // $('#nav-toggle').on('click', function (event) {
    //     event.preventDefault();
    //     $('#main-nav').toggleClass("open");
    // });
});


// scroll function
function scrollToID(id, speed){
    
    if ($(document).width() <= 767){
        var offSet = 257.5; // compensate for mobile nav opened height
    } else {
        var offSet = 0;
    }
    
    var targetOffset = $(id).offset().top - offSet;
    var mainNav = $('#main-nav');
    $('html,body').animate({scrollTop:targetOffset}, speed);
    if (mainNav.hasClass("open")) {
        mainNav.css("height", "1px").removeClass("in").addClass("collapse");
        mainNav.removeClass("open");
    }
}
if (typeof console === "undefined") {
    console = {
        log: function() { }
    };
}
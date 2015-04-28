(function($, win) {
    $.fn.inViewport = function(cb) {
        return this.each(function(i,el){
            function visPx(){
                var H = $(this).height(),
                    r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
                return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));
            } visPx();
            $(win).on("resize scroll", visPx);
        });
    };
}(jQuery, window));


$(function() {
    $(".an1").inViewport(function(px){
        if(px) $(this).addClass("an1a") ;
    });
    $(".an2").inViewport(function(px){
        if(px) $(this).addClass("an2a") ;
    });
    $(".an3").inViewport(function(px){
        if(px) $(this).addClass("an3a") ;
    });
    $(".re1").inViewport(function(px){
        if(px) $(this).addClass("re1a") ;
    });
    $(".re2").inViewport(function(px){
        if(px) $(this).addClass("re2a") ;
    });
    $(".re3").inViewport(function(px){
        if(px) $(this).addClass("re3a") ;
    });
    $(".re4").inViewport(function(px){
        if(px) $(this).addClass("re4a") ;
    });
    $(".re5").inViewport(function(px){
        if(px) $(this).addClass("re5a") ;
    });

    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});
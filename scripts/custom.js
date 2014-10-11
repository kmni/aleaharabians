
$(document).ready(function() {

// fancybox
// ====================================

$(".fancybox").fancybox({
    'transitionIn'  :   'elastic',
    'transitionOut' :   'elastic',
    'speedIn'       :   600,
    'speedOut'      :   200,
    'overlayShow'   :   false,
    'padding'       :   0
});

// fancybox video
// ====================================

$(".fancybox-video").click(function() {
    $.fancybox({
        'transitionIn'  :   'elastic',
        'transitionOut' :   'elastic',
        'speedIn'       :   600,
        'speedOut'      :   200,
        'overlayShow'   :   false,
        'width'         :   640,
        'height'        :   385,
        'href'          :  this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
        'type'          :   'swf',
        'swf'           :   { 'wmode': 'transparent', 'allowfullscreen': 'true' }
    });
    return false;
});

// slider at homepage
// ====================================

if( $(".slider").length > 0 ){
  $('.slider').bjqs({
    height      : 299,
    width       : 920,
    showcontrols: false,
    showmarkers: false
  });
}

// submenu
// ====================================

$(".menu__item.has-submenu").hover(
    function(){
        $(this).find(".submenu").fadeIn(200);
    },
    function(){
        $(".submenu").fadeOut(200);
    }
);


});

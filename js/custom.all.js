
jQuery(document).ready(function(){
    callback_mobile_dropdown();
});
jQuery(window).load(function(){ 
    fixFooterBottom();
    // callback_menu_align();
});
jQuery(window).resize(function(){
    fixFooterBottom();
    // callback_menu_align();
});

/*** DROPDOWN FOR MOBILE MENU */
var callback_mobile_dropdown = function () {
    var navLi = jQuery('#stamp-navigation li');
    navLi.each(function(){
        if ( jQuery(this).find('ul').length > 0 && !jQuery(this).hasClass('has_children') ){
            jQuery(this).addClass('has_children');
            jQuery(this).find('a').first().after('<p class="dropdownmenu icon icon-arrows-down"></p>');
        }
    });
    jQuery('.dropdownmenu').click(function(){
        if( jQuery(this).parent('li').hasClass('this-open') ){
            jQuery(this).parent('li').removeClass('this-open');
            jQuery(this).parent('li').children('.icon-arrows-up').removeClass('icon-arrows-up').addClass('icon-arrows-down');
        }else{
            jQuery(this).parent('li').addClass('this-open');
            jQuery(this).parent('li').children('.icon-arrows-down').removeClass('icon-arrows-down').addClass('icon-arrows-up');
        }
    });
    navLi.find('a').click(function(){
        jQuery('.navbar-toggle').addClass('collapsed');
        jQuery('.collapse').removeClass('in'); 
    });
};

// /*** CENTERED MENU */
// var callback_menu_align = function () {
//     var headerWrap      = jQuery('header.header');
//     var navWrap         = jQuery('#stamp-navigation');
//     var logoWrap        = jQuery('.navbar-header');
//     var containerWrap   = jQuery('.container');
//     var classToAdd      = 'menu-align-center';
//     if ( headerWrap.hasClass(classToAdd) ) {
//         headerWrap.removeClass(classToAdd);
//     }
//     var logoWidth       = logoWrap.outerWidth();
//     var menuWidth       = navWrap.outerWidth();
//     var containerWidth  = containerWrap.width();
//     if ( menuWidth + logoWidth > containerWidth ) {
//         headerWrap.addClass(classToAdd);
//     } else {
//         if ( headerWrap.hasClass(classToAdd) ) {
//             headerWrap.removeClass(classToAdd);
//         }
//     }
//     jQuery('.sticky-navigation-open').css('min-height','70');
//     var headerHeight = jQuery('.sticky-navigation').outerHeight();
//     if ( headerHeight > 70 ) {
//         jQuery('.sticky-navigation-open').css('min-height', headerHeight);
//     } else {
//         jQuery('.sticky-navigation-open').css('min-height', 70);
//     }
// }

/* STICKY FOOTER */
function fixFooterBottom(){
    var header      = jQuery('header.header');
    var footer      = jQuery('footer.footer');
    var content     = jQuery('.content-wrap');
    content.css('min-height', '1px');
    var headerHeight  = header.outerHeight();
    var footerHeight  = footer.outerHeight();
    var contentHeight = content.outerHeight();
    var windowHeight  = jQuery(window).height();
    var totalHeight = headerHeight + footerHeight + contentHeight;
    if (totalHeight<windowHeight){
      content.css('min-height', windowHeight - headerHeight - footerHeight );
    } else {
      content.css('min-height','1px');
    }
}

jQuery(document).ready(function($) {
    "use strict";
    /*---------------------------------------*/
    /*	BOOTSTRAP FIXES
	/*---------------------------------------*/
    var oldSSB = jQuery.fn.modal.Constructor.prototype.setScrollbar;
    $.fn.modal.Constructor.prototype.setScrollbar = function() {
        oldSSB.apply(this);
        if (this.scrollbarWidth) jQuery('.navbar-fixed-top').css('padding-right', this.scrollbarWidth);
    }
    var oldRSB = $.fn.modal.Constructor.prototype.resetScrollbar;
    $.fn.modal.Constructor.prototype.resetScrollbar = function() {
        oldRSB.apply(this);
        jQuery('.navbar-fixed-top').css('padding-right', '');
    }
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style')
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        )
        document.querySelector('head').appendChild(msViewportStyle)
    }
});


/*=================================
===  SMOOTH SCROLL NAVIGATION     ====
=================================== */
jQuery(document).ready(function(){
  jQuery('#stamp-navigation a[href*=#]:not([href=#]), a.woocommerce-review-link[href*=#]:not([href=#]), a.post-comments[href*=#]:not([href=#])').bind('click',function () {
    var headerHeight;
    var hash    = this.hash;
    var idName  = hash.substring(1);    // get id name
    var alink   = this;                 // this button pressed
    // check if there is a section that had same id as the button pressed
    if ( jQuery('section [id*=' + idName + ']').length > 0 && jQuery(window).innerWidth() >= 767 ){
      jQuery('.current').removeClass('current');
      jQuery(alink).parent('li').addClass('current');
    }else{
      jQuery('.current').removeClass('current');
    }
    if ( jQuery(window).innerWidth() >= 767 ) {
      headerHeight = jQuery('.sticky-navigation').outerHeight();
    } else {
      headerHeight = 0;
    }
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = jQuery(this.hash);
      target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        jQuery('html,body').animate({
          scrollTop: target.offset().top - headerHeight + 10
        }, 1200);
        return false;
      }
    }
  });
});



/*---------------------------------------*/
/*  NAVIGATION AND NAVIGATION VISIBLE ON SCROLL
/*---------------------------------------*/
function mainNav() {
    if(jQuery('.overlay-layer-nav').hasClass('sticky-navigation-open')){
        return false;
    }
    var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    var topMenuClose    = -70;
    var topMenuOpen     = 0;
    if ( jQuery('.admin-bar').length>0 ) {
        $parallax_one_header_height = jQuery('.navbar').height();
        topMenuClose    = $parallax_one_header_height * -1;
        topMenuOpen     = 32;
    }
    if ( top > 40 )
        jQuery('.appear-on-scroll').stop().animate({
            "opacity": '1',
            "top": topMenuOpen
        });
    else jQuery('.appear-on-scroll').stop().animate({
        "top": topMenuClose,
        "opacity": '0'
    });
}

/* TOP NAVIGATION MENU SELECTED ITEMS */
function scrolled() {

    if ( jQuery(window).width() >= 751 ) {
        var zerif_scrollTop = jQuery(window).scrollTop();       // cursor position
        var headerHeight = jQuery('.sticky-navigation').outerHeight();   // header height
        var isInOneSection = 'no';                              // used for checking if the cursor is in one section or not
        // for all sections check if the cursor is inside a section
        jQuery("section").each( function() {
            var thisID = '#' + jQuery(this).attr('id');           // section id
            var parallax_one_offset = jQuery(this).offset().top;         // distance between top and our section
            var thisHeight  = jQuery(this).outerHeight();         // section height
            var thisBegin   = parallax_one_offset - headerHeight;                      // where the section begins
            var thisEnd     = parallax_one_offset + thisHeight - headerHeight;         // where the section ends  
            // if position of the cursor is inside of the this section
            if ( zerif_scrollTop >= thisBegin && zerif_scrollTop <= thisEnd ) {
                isInOneSection = 'yes';
                jQuery('.current').removeClass('current');
                jQuery('#stamp-navigation a[href$="' + thisID + '"]').parent('li').addClass('current');    // find the menu button with the same ID section
                return false;
            }
            if (isInOneSection == 'no') {
                jQuery('.current').removeClass('current');
            }
        });
    }

}

var timer;
jQuery(window).scroll(function(){

    mainNav();

    if ( timer ) clearTimeout(timer);
    timer = setTimeout(function(){
        scrolled();
    }, 500);

});


var window_width_old;
jQuery(document).ready(function(){
    window_width_old = jQuery('.container').width();
    if( window_width_old <= 462 ) {
        jQuery('.products').parallaxonegridpinterest({columns: 1,selector: '.product'});
    } else if( window_width_old <= 750  ){
        jQuery('.products').parallaxonegridpinterest({columns: 2,selector: '.product'});
    } else {
        jQuery('.products').parallaxonegridpinterest({columns: 4,selector: '.product'});
    }
});

jQuery(window).resize(function() {
    if( window_width_old != jQuery('.container').outerWidth() ){
        window_width_old = jQuery('.container').outerWidth();
        if( window_width_old <= 462 ) {
            jQuery('.post-type-archive-product .products').parallaxonegridpinterest({columns: 1,selector: '.product'});
        } else if( window_width_old <= 750  ){
            jQuery('.post-type-archive-product .products').parallaxonegridpinterest({columns: 2,selector: '.product'});
        } else {
            jQuery('.post-type-archive-product .products').parallaxonegridpinterest({columns: 4,selector: '.product'});
        }
    }
});


;(function ($, window, document, undefined) {
    var defaults = {
            columns:                3,
            selector:               'div',
            excludeParentClass:     '',
        };
    function ParallaxOneGridPinterest(element, options) {
        this.element    = element;
        this.options    = $.extend({}, defaults, options);
        this.defaults   = defaults;
        this.init();
    }
    ParallaxOneGridPinterest.prototype.init = function () {
        var self            = this,
            $container      = $(this.element);
            $select_options = $(this.element).children();
        if( $('.upsells').length>0 || $('.related').length>0 ){
            return;
        } 
        self.make_magic( $container, $select_options );
    };
    ParallaxOneGridPinterest.prototype.make_magic = function (container) {
        var self            = this;
            $container      = $(container),
            columns_height  = [],
            unique_class    = 'parallax_one_grid_' + self.make_unique();
        var classname;
        var substr_index    = this.element.className.indexOf('parallax_one_grid_');
        if( substr_index>-1 ) {
            classname = this.element.className.substr( 0, this.element.className.length-47 );
        } else {
            classname = this.element.className;
        }
        var my_id;
        if( this.element.id == '' ) {
            my_id = 'parallax_one_id_' + self.make_unique();
        } else {
            my_id = this.element.id;
        }
        $container.after('<div id="' + my_id + '" class="' + classname + ' parallax_one_grid ' + unique_class + '"></div>');
        var i;
        for(i=1; i<=this.options.columns; i++){
            columns_height.push(0);
            var first_cols = '';
            var last_cols = '';
            if( i%self.options.columns == 1 ) { first_cols = 'parallax_one_grid_first'; }
            if( i%self.options.columns == 0 ) { first_cols = 'parallax_one_grid_last'; }
            $('.'+unique_class).append('<div class="parallax_one_grid_col_' + this.options.columns +' parallax_one_grid_column_' + i +' ' + first_cols + ' ' + last_cols + '"></div>');
        }
        if( this.element.className.indexOf('parallax_one_grid')<0 ){
            $container.children(this.options.selector).each(function(index){
                var min = Math.min.apply(null,columns_height);
                var this_index = columns_height.indexOf(min)+1;
                $(this).attr('parallax-one-attr','this-'+index).appendTo('.'+unique_class +' .parallax_one_grid_column_'+this_index);
                columns_height[this_index-1] = $('.'+unique_class +' .parallax_one_grid_column_'+this_index).height();
            });
        } else {
            var no_boxes = $container.find(this.options.selector).length;
            var i;
            for( i=0; i<no_boxes; i++ ){
                var min = Math.min.apply(null,columns_height);
                var this_index = columns_height.indexOf(min)+1;
                $('#'+this.element.id).find('[parallax-one-attr="this-'+i+'"]').appendTo('.'+unique_class +' .parallax_one_grid_column_'+this_index);
                columns_height[this_index-1] = $('.'+unique_class +' .parallax_one_grid_column_'+this_index).height();
            }
        }
        $container.remove();
    }
    ParallaxOneGridPinterest.prototype.make_unique = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for( var i=0; i<10; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
    $.fn.parallaxonegridpinterest = function (options) {
        return this.each(function () {
            var value = '';
            if (!$.data(this, value)) {
                $.data(this, value, new ParallaxOneGridPinterest(this, options) );
            }
        });
    }
})(jQuery);


var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

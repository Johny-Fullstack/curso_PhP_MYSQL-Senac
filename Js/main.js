jQuery(document).ready(function($) {
    window.onscroll = ()=> {
        if(window.pageYOffset > 140) {
            $('#header').addClass("active")
        } else {
            $('#header').removeClass("active")
        }
    }
});
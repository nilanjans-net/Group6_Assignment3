//Make Footer stay at the bottom
$(document).ready(function () {
    var docHeight = $('#xyz').position().top;
    var spanHeight = $('#xyz').height();
    var bodyHeight = $('.body').height();
    var bodyContHeight = $('.bodycont').height();
    var footerHeight = $('.footer').height();
    var footerTop = $('.footer').position().top + footerHeight;

    if (footerTop < docHeight) {
        $('.footer').css('margin-top', docHeight + spanHeight - bodyHeight + 50 + 'px');
    }
    if (bodyContHeight < docHeight) {
        $('.bodycont').css('height', docHeight + spanHeight + 'px');
    }


});
//reloads page after first full load. Helps to execute footer location script in chrome
window.onload = function () {
    if (!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}

//make page refresh after resize
$(window).bind('resize', function (e) {
    if (window.RT)
        clearTimeout(window.RT);
    window.RT = setTimeout(function () {
        this.location.reload(false); /* false to get page from cache */
    }
    , 100);
});

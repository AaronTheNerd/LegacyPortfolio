$(function() {
    $("#projects-carousel").on('slide.bs.carousel', function(e) {
        var id = $(e.relatedTarget).index();
        //console.log(id);
        $('#indicators > li > a.active').removeClass('active');
        $('#indicators > li > a[data-slide-to=' + id + ']').addClass('active');
    });
});
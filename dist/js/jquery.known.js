(function($) {

    $.fn.known = function() {

        this.each(function() {
            $(this).find('span').click(function(){
                $(this).toggleClass('unknown');
            });
        });

        return this;
    };

    $.fn.copyUnknownWords = function(src, dest) {

        $(this).click(function(){
            var all = [];
            $(src).find('.unknown').each(function (index) {
                all[index] = $(this).text();
            });
            $(dest).text(all.join(' , '));
        });

        return this;
    };

    $.fn.selectAll = function(src) {

        this.each(function() {
            $(this).click(function(){
                $(src).find('span').addClass('unknown');
            });
        });

        return this;
    };

    $.fn.deselectAll = function(src) {

        this.each(function() {
            $(this).click(function(){
                $(src).find('span').removeClass('unknown');
            });
        });

        return this;
    };


})(jQuery);
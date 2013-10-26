(function( $ ){

    $.fn.prettyfile = function(options) {

        var settings = $.extend({
            acceptedFileTypes: [],
            targetElement: "",
            onSelect: function(filename) {},
            onError: function(status, msg){}
        }, options);

        if($(settings.targetElement).length <= 0) {

            settings.onError(false, 'You forgot to attach prettyfile to an element.');

        } else {

            $(this).click(function() {
                $(settings.targetElement).click();
            });

            $(settings.targetElement).css({"display": "none"});
            $(settings.targetElement).change(function() {
                var uploadedFileName = $(settings.targetElement).val().split("\\");
                uploadedFileName = uploadedFileName[uploadedFileName.length-1];
                // Check for a valid file type against the acceptedFileTypes array
                if(settings.acceptedFileTypes.length > 0) {
                    // Loop through acceptedFileTypes array and check for a valid file
                    var fileTypeRegex = new RegExp('(' + settings.acceptedFileTypes.join('|').replace(/\./g, '\\.') + ')$');
                    if(!uploadedFileName.match(fileTypeRegex)) {
                        $(settings.targetElement).val('');
                        settings.onError(false, "Invalid Filetype Selected");
                        return;
                    } else {
                        settings.onSelect(uploadedFileName);
                        return;
                    }
                } else {
                    settings.onSelect(uploadedFileName);
                    return;
                }

            });

        }

    };

})(jQuery);
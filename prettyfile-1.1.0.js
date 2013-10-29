(function( $ ){

    $.fn.prettyfile = function(options) {

        var settings = $.extend({
            acceptedFileTypes: [],
            targetElement: "",
            cancelElement: "",
            onSelect: function(filename) {},
            onError: function(status, msg){},
            onCancel: function() {}
        }, options);

        if($(settings.targetElement).length <= 0) {

            settings.onError(false, 'You forgot to attach prettyfile to an element.');

        } else {

            $(this).click(function() {
                $(settings.targetElement).click();
            });

            if($(settings.cancelElement).length > 0) {
                $(settings.cancelElement).css({"display": "none"});
                $(settings.cancelElement).click(function() {
                    $(settings.targetElement).val('');
                    $(settings.cancelElement).css({"display": "none"});
                    settings.onCancel();
                    return;
                });
            }

            $(settings.targetElement).css({"display": "none"});
            $(settings.targetElement).change(function() {
                var uploadedFileName = $(settings.targetElement).val().split("\\");
                uploadedFileName = uploadedFileName[uploadedFileName.length-1];
                if(uploadedFileName == "") { // The user cancelled the file by clicking on "Cancel"
                    $(settings.targetElement).val('');
                    $(settings.cancelElement).css({"display": "none"});
                    settings.onCancel();
                    return;
                } else { // There's a file here, proceed
                    if(settings.acceptedFileTypes.length > 0) {
                        // Loop through acceptedFileTypes array and check for a valid file
                        var fileTypeRegex = new RegExp('(' + settings.acceptedFileTypes.join('|').replace(/\./g, '\\.') + ')$');
                        if(!uploadedFileName.match(fileTypeRegex)) {
                            $(settings.targetElement).val('');
                            $(settings.cancelElement).css({"display": "none"});
                            settings.onError(false, "Invalid Filetype Selected");
                            return;
                        } else {
                            $(settings.cancelElement).css({"display": "block"});
                            settings.onSelect(uploadedFileName);
                            return;
                        }
                    } else {
                        $(settings.cancelElement).css({"display": "block"});
                        settings.onSelect(uploadedFileName);
                        return;
                    }
                }

            });

        }

    };

})(jQuery);
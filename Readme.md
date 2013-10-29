##What is this?

An amazingly awesome way to stylize your file input elements. Actually, prettyfile just hides your input element and lets you use a custom selector as the target that triggers the file selector. It's a beautiful solution to a common problem that nearly every web developer faces.

##Options

- acceptedFileTypes: An array with valid file extensions. For example: ["jpg", "png", "gif"]

- targetElement: This should be the selector for the actual file input in your form.

- cancelElement: Optional, but if you want users to be able to click an element to cancel the file uploading process, set this to the selector you want. prettyfile will automatically hide this selector until it's necessary.

- onSelect: Function that gets called back when a file is selected by the user with a valid file extension. prettyfile will send the file's name as a parameter.

- onError: Callback function that gets called with a parameter of status, and message.

- onCancel: Callback function that gets called when the user cancels file upload selection.

####Notes:

Your **cancelElement** can be any selector in your page. When it's clicked, it will trigger the cancel process. This is the best way to ensure you can have whatever text you want as well as images, etc. View the demo link below if you have any questions.

###Usage
	var opts = {
		acceptedFileTypes: [], // An array with file types that should be accepted
		targetElement: "", // The selector to the file input in your form
		cancelElement: "", // The selector to the element you have your cancel content
		onSelect: function(uploadedFile) {}, // A callback function with the filename when the user selects the file
		onError: function(status, msg) {}, // A callback function with a failure reason as the message
		onCancel: function() {} // Function that handles cancel event
	};
	$("#mySelector").prettyfile(opts);
	

###Demo

http://raphaelcaixeta.com/prettyfile.js/
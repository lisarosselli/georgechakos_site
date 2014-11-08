console.log("main!");


var ModalModel = Backbone.Model.extend({
	initialize: function() {
		console.log("new modalModel");

		this.on("change", function() {
			console.log('ModalModel general change');
		});

		this.on("change:artObj", showHideModal)
	},
	defaults: {
		artObj: null,
		viewing: false
	}

});

var modal = new ModalModel();

// see this: http://getbootstrap.com/javascript/#modals


function showHideModal() {
	console.log("showHideModal "+gc.modal);

	if (modal.get('artObj') === null || !_.isObject(modal.get('artObj'))) {
		console.log("artObj is null!");
		
		$(gc.modal).removeClass('show');
		$(gc.modal).addClass('hide');

		gc.innerModal.innerHTML = "";

	} else {
		console.log("artObj has value "+modal.get('artObj').src);
		$(gc.modal).removeClass('hide');
		$(gc.modal).addClass('show');
		var topOffset = $(window).scrollTop();
		$(gc.modal).offset({top:topOffset}); //$(window).scrollTop();


		gc.innerModal.innerHTML = "<img src='" + modal.get('artObj').src + "'>"
	}
}



/* Main object */
var gc = {};

gc.portfolioImages = [
					{name:"A Challenge", 
						thumb:"img/art/thumbs/a_challenge.jpg", 
						src:"img/art/a_challenge.jpg"},
					{name:"Cowboys at Maroon Bells", 
						thumb:"img/art/thumbs/cowboys_at_maroon_bells.jpg", 
						src:"img/art/cowboys_at_maroon_bells.jpg"},
					{name:"Elk in Shadows", 
						thumb:"img/art/thumbs/elk_in_shadows.jpg", 
						src:"img/art/elk_in_shadows.jpg"},
					{name:"Moose at Big Falls", 
						thumb:"img/art/thumbs/moose_at_big_falls.jpg", 
						src:"img/art/moose_at_big_falls.jpg"},
					{name:"Moose at Mountain Stream", 
						thumb:"img/art/thumbs/moose_at_mountain_stream.jpg", 
						src:"img/art/moose_at_mountain_stream.jpg"}
				];

gc.modalViewable 	= false;
gc.modalContentObj 	= null;
gc.modal 			= document.getElementById("modal");
gc.innerModal 		= document.getElementById("innerModal");


function testHandler(event, data) {
	console.log("testHandler");
	modal.set('artObj', event.data);
}

/*	Create the main thumbnail gallery, prepping the 
 *	data-original attribute for lazy load image source.
 */
function createGallery(imagesArray, targetContainer) {
	console.log("createGallery");
	var htmlInjectionString = "";

	for (var i = 0; i < imagesArray.length; i++) {

		htmlInjectionString += "<div class='th_bounding item"+ i +"'>" + 
			"<img class='lazy' index='"+ i +"' data-original='"+ 
			imagesArray[i].thumb +"'>" + "</div>";

	}

	targetContainer.innerHTML = htmlInjectionString;
}

/*	Once the gallery thumbnails exist, bind each
 *	thumbnail to the click event while passing
 *	through the image data object.
 */
function bindModalEvents(imagesArray) {
	console.log("bindModalEvents");

	for (var i = 0; i < imagesArray.length; i++) {
		var classId = "div.item" + i;
		$(classId).on("click", imagesArray[i], testHandler);
	}

	$(gc.innerModal).on("click", null, testHandler);
}    

function showModal(value) {
	console.log("showModal with "+value);
}

function clearModalContent() {
	gc.modalContentObj = null;
}

createGallery(gc.portfolioImages, document.getElementById('gallery'));
bindModalEvents(gc.portfolioImages);

/*  This specifically binds jquery.lazyload.js to each image tag
     *  that declares the .lazy class
     */
    $("img.lazy").lazyload({
         effect : "fadeIn"
     });

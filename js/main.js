console.log("main!");


var ModalModel = Backbone.Model.extend({
	initialize: function() {
		console.log("new modalModel");

		this.on("change", function() {
			console.log('ModalModel general change');
		});

		this.on("change:artObj", showHideModal);
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
		//console.log("artObj is null!");
		$('#art-title').text('');
		$('#featured-art').html("<!-- featured art goes here -->");
		$('#myModal').modal('toggle');

	} else {
		//console.log("artObj has value "+modal.get('artObj').src);
		$('#art-title').text(modal.get('artObj').name);
		$('#featured-art').html("<img class='feature-image' src='"+ modal.get('artObj').src +"'>");
		$('#myModal').modal('toggle');
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
						src:"img/art/moose_at_mountain_stream.jpg"},
					{name:"Bull Moose",
						thumb:"img/art/thumbs/Bull_Moose.jpg",
						src:"img/art/Bull_Moose.jpg"
						},
					{name:"He's Too Big",
						thumb:"img/art/thumbs/Hes_Too_Big.jpg",
						src:"img/art/Hes_Too_Big.jpg"
						},
					{name:"King of Beasts",
						thumb:"img/art/thumbs/King_of_Beasts.jpg",
						src:"img/art/King_of_Beasts.jpg"
						},
					{name:"Lions 2",
						thumb:"img/art/thumbs/lions2.jpg",
						src:"img/art/lions2.jpg"
						},
					{name:"Maroon Bells Stream",
						thumb:"img/art/thumbs/Maroon_Bells_Stream.jpg",
						src:"img/art/Maroon_Bells_Stream.jpg"
						},
					{name:"Moose at Falls",
						thumb:"img/art/thumbs/Moose_at_Falls.jpg",
						src:"img/art/Moose_at_Falls.jpg"
						},
					{name:"Moose at Night Falls 2",
						thumb:"img/art/thumbs/Moose_at_Night_Falls2.jpg",
						src:"img/art/Moose_at_Night_Falls2.jpg"
						},
					{name:"Moose in Shadows",
						thumb:"img/art/thumbs/Moose_in_Shadows.jpg",
						src:"img/art/Moose_in_Shadows.jpg"
						},
					{name:"Mountain Falls",
						thumb:"img/art/thumbs/Mountain_Falls.jpg",
						src:"img/art/Mountain_Falls.jpg"
						},
					{name:"Mountain Lake",
						thumb:"img/art/thumbs/Mountain_Lake.jpg",
						src:"img/art/Mountain_Lake.jpg"
						},
					{name:"Mountain Moose",
						thumb:"img/art/thumbs/Mountain_Moose.jpg",
						src:"img/art/Mountain_Moose.jpg"
						},
					{name:"Night Moose",
						thumb:"img/art/thumbs/Night_Moose.jpg",
						src:"img/art/Night_Moose.jpg"
						},
					{name:"Oryx 2",
						thumb:"img/art/thumbs/oryx2.jpg",
						src:"img/art/oryx2.jpg"
						},
					{name:"Rocky Mountain Elk",
						thumb:"img/art/thumbs/Rocky_Mountain_Elk.jpg",
						src:"img/art/Rocky_Mountain_Elk.jpg"
						},
					{name:"Rocky Mountain Afternoon",
						thumb:"img/art/thumbs/Rocky_Mtn_Afternoon.jpg",
						src:"img/art/Rocky_Mtn_Afternoon.jpg"
						},
					{name:"Summer Falls",
						thumb:"img/art/thumbs/Summer_Falls.jpg",
						src:"img/art/Summer_Falls.jpg"
						},
					{name:"To Maroon Bells",
						thumb:"img/art/thumbs/To_Maroon_Bells.jpg",
						src:"img/art/To_Maroon_Bells.jpg"
						},
					{name:"Apple Pie",
						thumb:"img/art/thumbs/apple_pie.jpg",
						src:"img/art/apple_pie.jpg"
						},
					{name:"Autumn Birches",
						thumb:"img/art/thumbs/autumn_birches.jpg",
						src:"img/art/autumn_birches.jpg"
						},
					{name:"Autumn River",
						thumb:"img/art/thumbs/autumn_river.jpg",
						src:"img/art/autumn_river.jpg"
						},
					{name:"Beaver River",
						thumb:"img/art/thumbs/beaver_river.jpg",
						src:"img/art/beaver_river.jpg"
						},
					{name:"Fall Colors",
						thumb:"img/art/thumbs/fall_colors.jpg",
						src:"img/art/fall_colors.jpg"
						},
					{name:"m001",
						thumb:"img/art/thumbs/m001.jpg",
						src:"img/art/m001.jpg"
						},
					{name:"m002",
						thumb:"img/art/thumbs/m002.jpg",
						src:"img/art/m002.jpg"
						},
					{name:"m003",
						thumb:"img/art/thumbs/m003.jpg",
						src:"img/art/m003.jpg"
						},
					{name:"m004",
						thumb:"img/art/thumbs/m004.jpg",
						src:"img/art/m004.jpg"
						},
					{name:"m005",
						thumb:"img/art/thumbs/m005.jpg",
						src:"img/art/m005.jpg"
						},
					{name:"m006",
						thumb:"img/art/thumbs/m006.jpg",
						src:"img/art/m006.jpg"
						},
					{name:"m007",
						thumb:"img/art/thumbs/m007.jpg",
						src:"img/art/m007.jpg"
						},
					{name:"m009",
						thumb:"img/art/thumbs/m009.jpg",
						src:"img/art/m009.jpg"
						},
					{name:"m010",
						thumb:"img/art/thumbs/m010.jpg",
						src:"img/art/m010.jpg"
						},
					{name:"m011",
						thumb:"img/art/thumbs/m011.jpg",
						src:"img/art/m011.jpg"
						},
					{name:"Michigan River",
						thumb:"img/art/thumbs/michigan_river.jpg",
						src:"img/art/michigan_river.jpg"
						},
					{name:"New York Winter",
						thumb:"img/art/thumbs/new_york_winter.jpg",
						src:"img/art/new_york_winter.jpg"
						},
					{name:"Red Table",
						thumb:"img/art/thumbs/red_table.jpg",
						src:"img/art/red_table.jpg"
						},
					{name:"Shadow Patterns",
						thumb:"img/art/thumbs/shadow_patterns.jpg",
						src:"img/art/shadow_patterns.jpg"
						},
					{name:"Spring Falls",
						thumb:"img/art/thumbs/spring_falls.jpg",
						src:"img/art/spring_falls.jpg"
						},
					{name:"Spring Shadows",
						thumb:"img/art/thumbs/spring_shadows.jpg",
						src:"img/art/spring_shadows.jpg"
						},
					{name:"Steam Engine",
						thumb:"img/art/thumbs/steam_engine.jpg",
						src:"img/art/steam_engine.jpg"
						},
					{name:"Winter Forest",
						thumb:"img/art/thumbs/winter_forest.jpg",
						src:"img/art/winter_forest.jpg"
						}
				];

				/*
					{name:"",
						thumb:"img/art/thumbs/.jpg",
						src:"img/art/.jpg"
						},
				*/


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

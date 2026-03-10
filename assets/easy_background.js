function easy_background(e, t) {
	// Pre-load all slide images so transitions are instant
	var preloaded = t.slide.map(function(src) {
		var img = new Image();
		img.src = src;
		return img;
	});

	// Create a container for the background layers
	var container = document.createElement("div");
	container.classList.add("easy_background_container");
	container.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;";
	document.body.insertBefore(container, document.body.firstChild);

	// Create two layered divs to allow cross-fading
	var layer1 = document.createElement("div");
	var layer2 = document.createElement("div");
	var transMs = t.transitionDuration || 1000;
	[layer1, layer2].forEach(function(layer) {
		layer.style.cssText = "position:absolute;inset:0;background-size:cover;background-repeat:no-repeat;background-position:center center;opacity:0;will-change:opacity;transition:opacity " + transMs + "ms ease-in-out;";
		container.appendChild(layer);
	});
	
	// Show the first slide immediately
	layer1.style.opacity = 1;
	layer1.style.backgroundImage = "url('" + t.slide[0] + "')";
	
	var index = 1;
	var currentLayer = layer1;
	var nextLayer = layer2;
	
	function changeBackground() {
		// Set next slide image and fade it in
		nextLayer.style.backgroundImage = "url('" + t.slide[index] + "')";
		nextLayer.style.opacity = 1;
		
		// After the transition, fade out the current layer
		setTimeout(function() {
			currentLayer.style.opacity = 0;
			// Swap layers for the next iteration
			var temp = currentLayer;
			currentLayer = nextLayer;
			nextLayer = temp;
			// Update index
			index = (index + 1) % t.slide.length;
		}, 50);
	}
	
	// Change background every delay period (using the first delay for all slides)
	setInterval(changeBackground, t.delay[0]);
}
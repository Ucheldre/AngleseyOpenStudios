function easy_background(e, t) {
	// Create a container for the background layers
	var container = document.createElement("div");
	container.classList.add("easy_background_container");
	container.style.position = "fixed";
	container.style.top = 0;
	container.style.left = 0;
	container.style.width = "100%";
	container.style.height = "100%";
	container.style.zIndex = -1;
	document.body.insertBefore(container, document.body.firstChild);

	// Create two layered divs to allow cross-fading
	var layer1 = document.createElement("div");
	var layer2 = document.createElement("div");
	[layer1, layer2].forEach(function(layer) {
		layer.style.position = "absolute";
		layer.style.top = 0;
		layer.style.left = 0;
		layer.style.right = 0;
		layer.style.bottom = 0;
		layer.style.backgroundSize = "cover";
		layer.style.backgroundRepeat = "no-repeat";
		layer.style.backgroundPosition = "center center";
		layer.style.transition = "opacity " + (t.transitionDuration || 1000) + "ms ease-in-out";
		layer.style.opacity = 0;
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
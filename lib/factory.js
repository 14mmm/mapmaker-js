/**
 * @static
 */
Metamaps.MapRendererFactory = (function($) {
	return {
		/**
		 * Creates a renderer and it's underlying roomView object
		 * @method create
		 * @static
		 * @param {HTMLElement} canvasEl The DOM node to create the whole app in
		 * @param {Object} config The configuration object,
		 * see {@link Metamaps.MapView#defaultConfig}
		 * @param {Object} map The map to display
		 */
		create: function(canvasEl, config, map) {
			var canvas = $(canvasEl);
			/* jshint newcap: false */

			var mapView = new Metamaps.MapView(map, config, canvas);
			var renderer = new Metamaps.MapRenderer(mapView, map);
			var canvasPos = canvas.css("position");
			//The 'canvas' must have either relative or absolute positioning
			if (canvasPos !== "absolute" && canvasPos !== "relative") {
				canvas.css("position", "relative");
			}

			return renderer;
		}
	};
}(jQuery));

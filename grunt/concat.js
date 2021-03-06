module.exports = {
	options: {
		banner: '<%= banner %>',
		stripBanners: true,
	},
	dist: {
		src: [
			'bower_components/snap.svg/dist/snap.svg-min.js',
			'bower_components/underscore/underscore.js',
			'bower_components/backbone/backbone.js',
			'bower_components/Countable/Countable.js',
			'bower_components/socket.io-client/socket.io.js',
			'bower_components/typeahead.js/dist/typeahead.bundle.min.js',
			'bower_components/CloudCarousel/cloudcarousel.js',
			'bower_components/embedly/embedly.js',
			'bower_components/hogan/hogan-2.0.0.js',
			'bower_components/famous/dist/famous-global.min.js',
			'lib/utility.js',
			'lib/views/mixins.js',
			'lib/views/mapInfoBoxView.js',
			'lib/views/metacodeSetSwitchView.js',
			'lib/views/filterView.js',
			'lib/views/juntoView.js',
			'lib/views/newTopicView.js',
			'lib/views/newSynapseView.js',
			'lib/models/metacode.js',
			'lib/models/mapping.js',
			'lib/views/mappingView.js',
			'lib/models/topic.js',
			'lib/views/topicMappingView.js',
			'lib/views/topicCardView.js',
			'lib/models/synapse.js',
			'lib/views/synapseMappingView.js',
			'lib/views/synapseCardView.js',
			'lib/models/map.js',
			'lib/views/mapView.js',
			'lib/models/mapper.js',
			'lib/renderer.js',
			'lib/factory.js',
			'lib/models/collections.js',
		],
		dest: 'dist/metamaps_renderer.js'
	}
};

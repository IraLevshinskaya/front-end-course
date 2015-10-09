module.exports = {
	index: {
		page: {
			title: 'Rolling Scopes School'
		},
		talks: require('../data/talks.json')
	},
	'webinar': {
		page: {
			title: 'JS Webinar'
		},
		talks: require('../data/js-webinar/talks.json')
	},
	archive: {
		page: {
			title: 'Archive'
		},
		talks: require('../data/archive/2015-Q2/talks.json')
	}
}

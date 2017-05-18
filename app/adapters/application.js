import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'https://kupelike-rails.herokuapp.com',
    // host: 'https://kupelike-rails-oalba.c9users.io',
	headers: {
		"Accept": "application/json"
	}
});

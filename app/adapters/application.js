import DS from 'ember-data';
import Config from '../config/environment';

export default DS.JSONAPIAdapter.extend({
    host: Config.apiURL,
    // host: 'https://kupelike-rails-oalba.c9users.io',
	headers: {
		"Accept": "application/json"
	}
});

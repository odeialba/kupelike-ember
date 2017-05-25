import Ember from 'ember';
import Config from '../config/environment';

export default Ember.Controller.extend({
	actions: {
		postEmail: function(){
			var that = this;
			Ember.$.ajax({
				url: Config.apiURL+"/contact",
				type: "POST",
				data: Ember.$('.contact_form').serialize(),
				processData: false,
				complete: function() {
					that.replaceRoute('index2');
				}
			});
		}
	}
});

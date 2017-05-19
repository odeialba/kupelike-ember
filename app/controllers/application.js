import Ember from 'ember';

export default Ember.Controller.extend({
    menu: Ember.inject.service(),
    currentPathChanged: function () {
		window.scrollTo(0, 0);
	}.observes('currentPath')
});

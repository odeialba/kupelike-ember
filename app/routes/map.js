import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    // console.log(params);
    return this.store.find("place", params.id)
  }
});

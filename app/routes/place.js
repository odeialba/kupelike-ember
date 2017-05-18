import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    // console.log(params);
    
    return this.store.find("place", params.id).then(function(place){
      return place.reload();
    })
  },
  setupController: function(controller, model) {
    this._super(...arguments);
    // var interval = 1000;
    var that = this;
    var five = function() {
      // model.then(function(json) {
      //   that.controller.set(model, json);
      model.reload();
        setTimeout(five, 6000);
      // }.bind(that));
      
    };
    five();
  }
});

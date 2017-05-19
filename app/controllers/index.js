import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        pathTo: function(){
            this.replaceRoute(...arguments);
        }
    }
});

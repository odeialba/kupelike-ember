import Ember from 'ember';

export default Ember.Component.extend({
    /* global navigator */
    /* global google */
    didInsertElement:function(){
        var that = this;
        // window.onload = function(){
        var sagarPos;
        // var perPos;
        var distancia;
        var id = null;
		
		if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var perPos = new google.maps.LatLng({lat: position.coords.latitude, lng: position.coords.longitude});
            that.get('places').forEach(function(place){
                // Si en la sagardotegi están establecidas las coordenadas
                if (place.get('latitude') && place.get('longitude')){
                    sagarPos = new google.maps.LatLng(place.get('latitude'), place.get('longitude'));
                    distancia = google.maps.geometry.spherical.computeDistanceBetween(perPos, sagarPos); 
                }

                if (distancia <= 30) {
                    id = place.get('id');
                }
            })
            Ember.run.scheduleOnce('afterRender', function(){
                if (id != null){
                    // var url = this.transitionToRoute('place', id);
                    // that.transitionToRoute('place', id);
                    that.sendAction('transitionTo', 'place', id);
                    // url = url.replace("xxx", id);
                    // window.location = url;
                } else {
                    // window.location = this.transitionToRoute('index2');
                    // that.transitionToRoute('index2');
                    that.sendAction('transitionTo', 'index2');
                }
            })
          },
            function () { 
                // window.location = this.transitionToRoute('index2');
                // that.transitionToRoute('index2');
                // console.log(error);
                Ember.run.scheduleOnce('afterRender', function(){
                    that.sendAction('transitionTo', 'index2');
                })
            },{timeout:6000});
		} else {
            // window.location.href = this.transitionToRoute('index2');
            // that.transitionToRoute('index2');
            Ember.run.scheduleOnce('afterRender', function(){
                that.sendAction('transitionTo', 'index2');
            })
        }
        // setTimeout(window.location.href = "<%= index_path %>", 6000);
    // }
    }
});

import Ember from 'ember';

export default Ember.Service.extend({
    page: '/',
    searchText: '',
    // placesFiltered: Ember.computed.filterBy('places', 'name', this.get('searchText'))
    placesFiltered: Ember.computed('places.[]', 'searchText', function(){
        return this.get('places').filter(place => {
            return place.get('name').toLowerCase().indexOf(this.get('searchText').toLowerCase()) != -1;
        });
    })
});

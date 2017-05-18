import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    picture: DS.attr('string'),
    town: DS.attr('string'),
    description: DS.attr('string'),
    time: DS.attr('string'),
    address: DS.attr('string'),
    phone: DS.attr('string'),
    email: DS.attr('string'),
    latitude: DS.attr('string'),
    longitude: DS.attr('string'),
    items: DS.hasMany('item')
});

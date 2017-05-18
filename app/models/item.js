import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
	picture: DS.attr('string'),
	votes_count: DS.attr('number'),
	year: DS.attr('number'),
	description: DS.attr('string'),
	statistics: DS.attr(),
	place: DS.belongsTo('place')
});

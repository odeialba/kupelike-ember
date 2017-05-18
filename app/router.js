import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
  menu: Ember.inject.service(),
  willTransition: function(){
    // console.log('aa');
    this.get('menu').set('page', new Date());
    return true;
  }
});

Router.map(function() {
  this.route('places');
  this.route('place', { path: '/places/:id'});

  this.route('maps');
  this.route('contact');
  this.route('about_us');
  this.route('map', { path: '/map/:id'});
  this.route('item');
  this.route('index2');
});

export default Router;

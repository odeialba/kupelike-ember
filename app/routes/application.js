import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    locale: {
      refreshModel: true
    }
  },
  i18n: Ember.inject.service(),
  menu: Ember.inject.service(),
  model: function(params) {
    var locales = ["es","en","eu"];
    var userLang = navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage);
    if (userLang) {
      userLang = userLang.split("-")[0];
    }
    // alert("userLang"+userLang);
    // alert("params.locale"+params.locale);
    if (params.locale){
      userLang = params.locale;
    }
    if (!locales.includes(userLang)) {
      userLang = "en";
    }
    this.set('i18n.locale', userLang);
    // console.log(userLang)
    window.app_language = userLang;
    window.cambiarActive();
    this.set('menu.places', this.store.findAll("place"))
  },
  activate: function() {
    Ember.$('body').removeClass('loading');
  }
});

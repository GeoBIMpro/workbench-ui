import Ember from 'ember';
import ApplicationAdapter from './application';

export
default ApplicationAdapter.extend({
  host: function() {
    var apiEndpoint = this.duraark.getAPIEndpoint('sessions');
    console.log('"duraark-sessions" endpoint: ' + apiEndpoint);
    return apiEndpoint;
  }.property().volatile(),

  pathForType: function(type) {
    var camelized = Ember.String.camelize(type);
    return Ember.String.pluralize(camelized);
  }
});

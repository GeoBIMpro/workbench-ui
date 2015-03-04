import Ember from 'ember';
import ApplicationAdapter from './application';
import ENV from '../config/environment';

var apiConfig = ENV.DURAARKAPI.ifcmetadata;

console.log('Connecting to "ifcmetadata" API via: ' + apiConfig.host);

export
default ApplicationAdapter.extend({
    host: apiConfig.host,

    pathForType: function(type) {
        var camelized = Ember.String.camelize(type);
        return Ember.String.pluralize(camelized);
    }
});
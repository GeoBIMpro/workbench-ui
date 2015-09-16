import DS from 'ember-data';

var Session = DS.Model.extend({
  label: DS.attr('string'),
  state: DS.attr('string'),
  uri: DS.attr('string'),
  address: DS.attr('string'),
  description: DS.attr('string'),

  physicalAssets: DS.attr(),
  digitalObjects: DS.attr(),
  config: DS.attr(),
  files: DS.attr(),
  fixedInputFiles: DS.attr(),

  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
});

export
default Session;

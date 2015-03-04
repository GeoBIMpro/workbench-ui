import DS from 'ember-data';

export
default DS.Model.extend({
    schema: DS.attr('string'),
    floors: DS.attr('number'),
    scans: DS.attr('number'),
});
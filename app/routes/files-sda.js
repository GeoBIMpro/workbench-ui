import Ember from 'ember';

export
default Ember.Route.extend({
  model: function(params) {
    return this.store.find('physical-asset');
  },

  setupController: function(controller, model) {
    this._super(controller, model);

    model.forEach(function(file) {
      file.set('isSelected', false);
    });

    controller.set('showSidebar', true);
    controller.set('selectedFile', null);
  }
});

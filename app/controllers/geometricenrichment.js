import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    next: function() {

      // FIXXME: check if everytihng is saved in the buildm-editor and display modal in case of unsaved changes!

      var session = this.get('session');
      this.transitionToRoute('sipgeneration', session);
    },

    back: function() {

      // FIXXME: check if everytihng is saved in the buildm-editor and display modal in case of unsaved changes!

      var session = this.get('session');
      this.transitionToRoute('semanticenrichment', session);
    },

    toggleToolSelection: function(digObj, toolName, isChecked) {
      if (isChecked) {
        console.log('Added "' + toolName + '" on digital object: ' + digObj.label);
      } else {
        console.log('Removed tool "' + toolName + '" on digital object: ' + digObj.label);
      }
    },

    showTopicSelection: function(digObj) {
      this.set('fileInfo', digObj);
    },

    clickedTool: function(topic) {
      var selectedDigitalObject = this.get('fileInfo'),
        currentTools = selectedDigitalObject.get('geoTools');

      var isTopic = currentTools.find(function(item) {
        return topic.get('label') === item.label;
      });

      if (isTopic) {
        currentTools.removeObject(topic);
      } else {
        currentTools.pushObject(topic);
      }
    },

    // FIXXME: change name!
    removeTopic: function(digObj, topic) {
      digObj.get('geoTools').removeObject(topic);
    },

    // FIXXME: change name!
    showSelectedTopic: function(digObj, tool) {
      this.set('fileInfo', null);
      this.set('tool', tool);
    }
  }
});
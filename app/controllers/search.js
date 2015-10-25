import Ember from 'ember';

export default Ember.Controller.extend({
  buildings: [],
  selectedBuilding: null,

  actions: {
    openBuildingAsSession(uri, building) {
        let controller = this;

        // Check if session already exists:
        let result = this.duraark.querySession({
          uri: uri
        }).then(function(existingSession) {
          // console.log('existingSession: ' + JSON.stringify(existingSession, null, 4));

          if (existingSession.length) {
            let id = existingSession[0].id;
            console.log('session (id: ' + id + ') exists, opening now ...');
            // NOTE: Providing the 'id' of the session here so that the 'model' hook
            // of the 'preingest.files' route gets called. Currently we have a mix of
            // ember-data and native objects for 'session' models, which makes this
            // necessary.
            controller.transitionToRoute('metadata', id);
          } else {
            console.log('no session exists for building, creating new ...');
            controller.duraark.createSessionFromBuilding(uri, building).then(function(newSession) {
              // NOTE: Providing the 'id' of the session here so that the 'model' hook
              // of the 'preingest.files' route gets called. Currently we have a mix of
              // ember-data and native objects for 'session' models, which makes this
              // necessary.
              controller.transitionToRoute('preingest.metadata', newSession.id);
            });
          }
        });
      },

      showDetails(uri, building) {
        this.set('showSidebarDetails', true);
        this.set('selectedBuilding', building);
        this.set('selectedUri', uri);
      },

      onFilterChanged(filters) {
        var that = this;

        console.log('[search] filters: ' + JSON.stringify(filters, null, 4));

        this.duraark.getBuildings({
          filters: filters
        }).then(buildings => {
          // console.log('buildings: ' + JSON.stringify(buildings));

          var items = buildings.results.bindings.filter(item => {
            return (item.result.value !== 'http://data.duraark.eu/resource/'); // ? item.result.value : false;
          });

          items = items.map(item => {
            return {
              url: item.result.value,
              label: item.result.value.split('/').pop()
            }
          });

          that.set('buildings', items);
        });
      }
  },
  
  onBuildingsChanged: function() {
    let buildings = this.get('buildings');
    debugger;

    let places = [];

    buildings.forEach(building => {
      places.push({
        name: building['http://data.duraark.eu/vocab/buildm/name'][0]['value'],
        latitude: building['http://data.duraark.eu/vocab/buildm/latitude'][0]['value'],
        longitude: building['http://data.duraark.eu/vocab/buildm/longitude'][0]['value'],
      });
    });

    this.set('places', places);
  }.observes('buildings').on('init')
});

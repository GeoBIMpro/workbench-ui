import Ember from 'ember';

function _createSipDescriptionFrom(session) {
    return session;
}

export
default Ember.Route.extend({
    model: function() {
        return {
            sessions: [{
                label: 'Haus 30',

                physicalAssets: [{
                    descMD: {
                        address: 'Haus 30, Street 42, Berlin, Germany',
                        lat: 14,
                        lng: 43
                    },
                    digitalObjects: [{
                        label: 'Haus 30',
                        path: '/storage/1234-1234-1234-1234/digitalObjects/haus30.ifc',
                        physicalAssets: [0],
                        techMD: {
                            filename: 'haus30.ifc',
                            size: 592843,
                            type: 'IFC-SPF',
                        },
                        descMD: {
                            creator: 'I Architect'
                        },
                        semMD: {
                            candidates: [{}], // TODO
                            seeds: [{}] // TODO
                        },
                        derivatives: [{
                            label: 'Difference to: Haus 30 (Scan: 2014-03-22)',
                            path: '/storage/1234-1234-1234-1234/digitalObjects/deviation-2014-03-22.rdf',
                            type: 'difference-detection',
                            techMD: {
                                filename: 'deviation-2014-03-22.rdf',
                                size: 8924,
                                type: 'ifcPCDiff',
                                creator: 'Difference Detection Tool v0.4.3',
                                copyright: 'UBO'
                            }
                        }, {
                            label: 'Registration to: Haus 30 (Scan: 2014-03-22)',
                            path: '/storage/1234-1234-1234-1234/digitalObjects/registraction-2014-03-22.rdf',
                            type: 'registration',
                            techMD: {
                                filename: 'registration-2014-03-22.rdf',
                                size: 384,
                                type: 'ifcPCReg',
                                creator: 'Registration Tool v0.4.3',
                                copyright: 'UBO'
                            }
                        }]
                    }, {
                        label: 'Haus 30',
                        path: '/storage/1234-1234-1234-1234/digitalObjects/haus30.e57',
                        physicalAssets: [0],
                        techMD: {
                            filename: 'haus30.e57',
                            size: 2837423,
                            type: 'E57',
                        },
                        semMD: {
                            candidates: [{}], // TODO
                            seeds: [{}] // TODO
                        },
                        derivatives: [{
                            label: 'Haus 30 (Reconstruction)',
                            path: '/storage/1234-1234-1234-1234/digitalObjects/haus30-reconstruction.ifc',
                            type: 'reconstruction',
                            techMD: {
                                filename: 'haus30-reconstruction.ifc',
                                size: 592243,
                                type: 'IFC-SPF',
                                creator: 'IFC Reconstruction Tool v0.5.0',
                                copyright: 'UBO'
                            }
                        }, {
                            label: 'Haus 30 (with electrical appliances)',
                            path: '/storage/1234-1234-1234-1234/digitalObjects/haus30-electrical-appliances.ifc',
                            type: 'electrical-appliances',
                            techMD: {
                                filename: 'haus30-electrical-appliances.ifc',
                                size: 42523,
                                type: 'IFC-SPF',
                                creator: 'RISE v0.6.1',
                                copyright: 'FhA'
                            }
                        }, {
                            label: 'Difference to: Haus 30 (Scan: 2014-03-22)',
                            path: '/storage/1234-1234-1234-1234/digitalObjects/deviation-2014-03-22.rdf',
                            type: 'difference-detection',
                            techMD: {
                                filename: 'deviation-2014-03-22.rdf',
                                size: 8924,
                                type: 'ifcPCDiff',
                                creator: 'Difference Detection Tool v0.4.3',
                                copyright: 'UBO'
                            }
                        }, {
                            label: 'Registration to: Haus 30 (Scan: 2014-03-22)',
                            path: '/storage/1234-1234-1234-1234/digitalObjects/registraction-2014-03-22.rdf',
                            type: 'registration',
                            techMD: {
                                filename: 'registration-2014-03-22.rdf',
                                size: 384,
                                type: 'ifcPCReg',
                                creator: 'Registration Tool v0.4.3',
                                copyright: 'UBO'
                            }
                        }]
                    }]
                }],

                digitalObjects: [{
                    label: 'Haus 30',
                    path: '/storage/1234-1234-1234-1234/digitalObjects/haus30.ifc',
                    physicalAssets: [0],
                    techMD: {
                        filename: 'haus30.ifc',
                        size: 592843,
                        type: 'IFC-SPF',
                    },
                    descMD: {
                        creator: 'I Architect'
                    },
                    semMD: {
                        candidates: [{}], // TODO
                        seeds: [{}] // TODO
                    }
                }, {
                    label: 'Haus 30',
                    path: '/storage/1234-1234-1234-1234/digitalObjects/haus30.e57',
                    physicalAssets: [0],
                    techMD: {
                        filename: 'haus30.e57',
                        size: 2837423,
                        type: 'E57',
                    },
                    descMD: {
                        creator: 'I Architect'
                    },
                    semMD: {
                        candidates: [{}], // TODO
                        seeds: [{}] // TODO
                    }
                }]
            }]
        }
    },

    setupController: function(controller, model) {
        this._super(controller, model);

        var session = model.sessions[0];
        var sip = _createSipDescriptionFrom(session);

        controller.set('sip', sip);
    }
});
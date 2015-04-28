/* jshint node: true */

var apiConfig = {
    host: '',
    overrideHost: ''
}

module.exports = function(environment) {
    var ENV = {
        modulePrefix: 'workbench-ui',
        environment: environment,
        baseURL: '/',
        locationType: 'auto',
        contentSecurityPolicy: {
            'default-src': "'none'",
            'script-src': "'self'",
            'font-src': "'self'",
            'connect-src': "'self' http://localhost:5001 http://localhost:5002 http://localhost:5003 http://localhost:5004 http://localhost:5005 http://localhost:5006",
            'img-src': "'self' a.tiles.mapbox.com",
            'style-src': "'self' 'unsafe-inline'",
        },
        apiConfig: {
            host: '',
            overrideHost: ''
        },
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            }
        },

        APP: {
            // Here you can pass flags/options to your application instance
            // when it is created
        },

        // Default API endpoing configuration for the DURAARK Platform for 
        // *production* environment. For the development environment the 
        // config is overwritten below.
        DURAARKAPI: {
            sda: {
                endpoint: '/sda'
            },
            searchItems: {
                endpoint: '/sda/example'
            },
            sessions: {
                endpoint: '/sip'
            },
            files: {
                endpoint: '/storage'
            },
            stages: {
                endpoint: '/sip/stages'
            },
            ifcmetadata: {
                endpoint: '/ifcmetadata',
                // The endpoint where the current jobs ('pending' and 'finished') are returned
                jobsEndpoint: '/ifcm',
                // The endpoint where an extraction job can be posted
                extractEndpoint: '/ifcm/extract',
                // TODO: the JSON response from the API has one parent key, which is
                // denoted here. Think on a generic key, e.g. 'metadata', to unify the
                // handling in the APIIfcMetadata and APIE57Metadata binding!
                responseKey: 'ifcms'
            },
            e57metadata: {
                endpoint: '/e57metadata',
                jobsEndpoint: '/e57m',
                extractEndpoint: '/e57m/extract',
                responseKey: 'e57ms'
            },
            semanticenrichment: {
                endpoint: '/semanticenrichment',
                jobsEndpoint: '/enrichment',
                extractEndpoint: '/enrichment/extract'
            }
        }
    };

    if (environment === 'development') {
        // ENV.APP.LOG_RESOLVER = true;
        // ENV.APP.LOG_ACTIVE_GENERATION = true;
        // ENV.APP.LOG_TRANSITIONS = true;
        // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        // ENV.APP.LOG_VIEW_LOOKUPS = true;


        // Overwrite API endpoints for development environment:
        // ENV.apiConfig.overrideHost = 'http://localhost';
        ENV.apiConfig.overrideHost = 'http://localhost';

        // ENV.DURAARKAPI = {
        //     sda: {
        //         endpoint: '/sda'
        //     },
        //     searchItems: {
        //         endpoint: '/sda/example'
        //     },
        //     sessions: {
        //         endpoint: '/sip'
        //     },
        //     files: {
        //         endpoint: '/storage'
        //     },
        //     stages: {
        //         endpoint: '/sip/stages'
        //     },
        //     ifcmetadata: {
        //         endpoint: '/ifcmetadata',
        //         // The endpoint where the current jobs ('pending' and 'finished') are returned
        //         jobsEndpoint: '/ifcm',
        //         // The endpoint where an extraction job can be posted
        //         extractEndpoint: '/ifcm/extract',
        //         // TODO: the JSON response from the API has one parent key, which is
        //         // denoted here. Think on a generic key, e.g. 'metadata', to unify the
        //         // handling in the APIIfcMetadata and APIE57Metadata binding!
        //         responseKey: 'ifcms'
        //     },
        //     e57metadata: {
        //         endpoint: '/e57metadata',
        //         jobsEndpoint: '/e57m',
        //         extractEndpoint: '/e57m/extract',
        //         responseKey: 'e57ms'
        //     },
        //     semanticenrichment: {
        //         endpoint: '/semanticenrichment',
        //         jobsEndpoint: '/enrichment',
        //         extractEndpoint: '/enrichment/extract'
        //     }
        // };

        ENV.DURAARKAPI = {
            sda: {
                endpoint: ':5005'
            },
            searchItems: {
                endpoint: ':5005/example'
            },
            sessions: {
                endpoint: ':5004'
            },
            files: {
                endpoint: ':5001'
            },
            ifcmetadata: {
                endpoint: ':5002',
                jobsEndpoint: '/ifcm',
                extractEndpoint: '/ifcm/extract',
                responseKey: 'ifcms'
            },
            e57metadata: {
                endpoint: ':5003',
                jobsEndpoint: '/e57m',
                extractEndpoint: '/e57m/extract',
                responseKey: 'e57ms'
            },
            semanticenrichment: {
                endpoint: ':5006',
                jobsEndpoint: '/enrichment',
                extractEndpoint: '/enrichment/extract'
            }
        };
    }

    if (environment === 'test') {
        // Testem prefers this...
        ENV.baseURL = '/';
        ENV.locationType = 'none';

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = '#ember-testing';
    }

    if (environment === 'production') {

    }

    return ENV;
};
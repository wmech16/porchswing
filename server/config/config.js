var _ = require('lodash');

//default config object for our api
var config = {
	/* just placing the name of our possible NODE_ENV values for later*/
	dev:    'development',
	test:   'testing',
	prod:   'production',
	port:    process.env.PORT || 3000  
};

//check to see if the NODE_ENV was set, if not, then set it to dev
process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
//set config.env to whatever the NODE_ENV is
config.env = process.env.NODE_ENV;

var envConfig;
//require could error out if
//the file doesn't exist, try this statement
//and fallback to an empty object if it does error out
try {
	envConfig = require('./' + config.env);
	//just making sure the require actually
	//got something back
	envConfig = envConfig || {};
} catch(e) {
	envConfig = {};
}

//merge the two config files together
//the envConfig file will overwrite properties
//on the config object
module.exports = _.merge(config, envConfig);
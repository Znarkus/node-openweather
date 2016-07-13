var TypeProvider = require('./typeProvider.js');

var LocationProvider = function(internalConfig, externalConfig) {
    return {
      city: function(city, country) {
        
        externalConfig.params = {
          city: city,
          country: country
        };

        var type = new TypeProvider(internalConfig, externalConfig);
        return type;
      }
    }
}

module.exports = LocationProvider;

var request = require("superagent");
var Promise = require('bluebird');
var TypeProvider = function(internalConfig, externalConfig) {
  return {
    now: function() {
      return new Promise(function(resolve, reject) {
        var requestUrl =   internalConfig.base +
          internalConfig.current +
          "q="+externalConfig.params.city;

        if(typeof externalConfig.params.country != 'undefined') {
          requestUrl += ","+externalConfig.params.country;
        }

        if(typeof externalConfig.accuracy != 'undefined') {
          requestUrl += "&accuracy="+externalConfig.accuracy;
        }

        if(typeof externalConfig.units != 'undefined') {
          requestUrl += "&units="+externalConfig.units;
        }

        if(typeof externalConfig.language != 'undefined') {
          requestUrl += "&lang="+externalConfig.language;
        }

        requestUrl += "&appid="+externalConfig.key;
        console.log(requestUrl);
        request.get( requestUrl )
          .end(function(err, res) {
              if(err) {
                reject(err.message);
              } else {
                resolve(res.body);
              }
          });
      })

    }
  }
}

module.exports = TypeProvider;

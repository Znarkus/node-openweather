# overburn/node-openweather

[![Build Status](https://travis-ci.org/overburn/node-openweather.svg?branch=master)](https://travis-ci.org/overburn/node-openweather)
[![npm version](https://badge.fury.io/js/node-openweather.svg)](https://badge.fury.io/js/node-openweather)

## Installation

Just install the package using npm
```bash
npm install node-openweather
```

## Usage

```javascript
var weather = require('node-openweather')({
  key: "your-openweathermap-api-key"
});

weather.city('London').now().then(function(res) {
  //success logic
}).catch(function(err) {
  //error handling
});
```

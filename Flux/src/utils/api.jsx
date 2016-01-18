var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = 'e0dd744582267f7';

module.exports = window.api = {
  get: function (url) {
    return fetch(rootUrl + url, {
      header: {
        'Authorization': 'Client-ID ' + apiKey
      }
    })
    .then(function (response) {
      return response.json();
    });
  }
};

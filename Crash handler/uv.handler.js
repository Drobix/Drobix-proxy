// Ultraviolet Handler File
const { UVHandler } = require('ultraviolet');

module.exports = new UVHandler({
  headers: {
    'User-Agent': 'Drobix-Search-Proxy',
  },
});

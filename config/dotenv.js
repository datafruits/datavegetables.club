/* eslint-env node */

'use strict';

const path = require('path');

module.exports = function(/* env */) {
  return {
    clientAllowedKeys: ['CHAT_SOCKET_URL', 'STREAM_HOST', 'STREAM_NAME'],
    fastbootAllowedKeys: [],
    failOnMissingKey: false,
    path: path.join(path.dirname(__dirname), '.env')
  }
};

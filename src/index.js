'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) { },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) { },
};
const net = require('net');

const client = new net.Socket();
client.setTimeout(30000); // Set timeout to 30 seconds

client.connect(1337, '192.168.82.26', function () {
  console.log('Connected');
});

client.on('timeout', function () {
  console.log('Connection timed out');
  client.destroy(); // Terminate the connection
});

client.on('error', function (err) {
  console.error('Connection error:', err);
});
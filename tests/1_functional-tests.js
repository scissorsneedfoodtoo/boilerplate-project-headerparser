/*
*       
*       To run the tests, open the terminal with [Ctrl + `] (backtick)
*       and run the command `npm run test`
*
*/

const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', () => {

  suite('Routing Tests', () => {
    
    suite('GET /api/whoami => request header object', () => {
      
      test('Gets the expected IP address, preferred languages, and system info', done => {
        chai.request(server)
          .get('/api/whoami')
          // Mock header 
          .set('accept-language', 'foo')
          .set('user-agent', 'bar')
          .end((err, res) => {
            assert.deepStrictEqual(res.body, { ipaddress: '::ffff:127.0.0.1', language: 'foo', software: 'bar' });
            done();
          });
      });
      
    });

  });

});

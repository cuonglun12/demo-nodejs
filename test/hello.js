var hippie = require('hippie');
var app = require('../app.js');

describe('Hello', function () {
  describe('/hello/:name endpoint', function () {
    it('returns a welcome message based on the name', function (done) {
      hippie()
        .get('http://localhost:8080/hello/cuongthn')
        .expectStatus(200)
        .expectBody('"How are you cuongthn"')
        .end(function(err, res, body) {
          if (err) throw err;
          done();
        });
    });
  });
});

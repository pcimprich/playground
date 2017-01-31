var request = require("request");

var base_url = "http://localhost:3000/"

describe("uResults server", function() {
	
	describe("GET /index", function() {
		
		// test return code and page content
		it("returns status code 200", function(done) {
			request.get(base_url + 'index', function(error, response, body) {
				expect(response.statusCode).toBe(200);
				//console.log(body);
				expect(body).toContain('<u-res-categories comp="1"></u-res-categories>');
				done();
			});
		});
		
		// test return code and page content
		it("returns status code 200", function(done) {
			request.get(base_url + 'index/2', function(error, response, body) {
				expect(response.statusCode).toBe(200);
				//console.log(body);
				expect(body).toContain('<u-res-categories comp="2"></u-res-categories>');
				done();
			});
		});
		
	});
});
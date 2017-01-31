var request = require("request");

var base_url = "http://localhost:3000/"

describe("uResults API - versions", function() {
	
	describe("GET /api/versions", function() {
		
		// test return code and teams DTO fields
		it("returns status code 200", function(done) {
			request.get(base_url + 'api/versions', function(error, response, body) {
				expect(response.statusCode).toBe(200);
				
				//DTO fields
				var about = JSON.parse(body);
				expect(about.name).toBe('uResults');
				expect(about.version).toBeDefined();
				expect(about.packages[0].name).toBe('Node.js');
				expect(about.packages[1].name).toBe('V8');
				expect(about.packages[2].name).toBe('Express');
				expect(about.packages[3].name).toBe('React');
				expect(about.packages[4].name).toBe('AngularJS');
				done();
			});
		});		
	
	});
});

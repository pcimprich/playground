var request = require("request");

var base_url = "http://localhost:3000/"

describe("uResults server API", function() {
	
	describe("GET /api/categories", function() {
		
		// test return code and categories DTO fields
		it("returns status code 200", function(done) {
			request.get(base_url + 'api/categories', function(error, response, body) {
				expect(response.statusCode).toBe(200);
				//console.log(body);
				var comp = JSON.parse(body);
				expect(comp[1].id).toBeDefined();
				expect(comp[1].name).toBeDefined();
				expect(comp[1].competitions).toBeUndefined();
				done();
			});
		});	
		
		// test return code and categories DTO fields including competitions
		it("returns status code 200", function(done) {
			request.get(base_url + 'api/categories?withCompetitions=1', function(error, response, body) {
				expect(response.statusCode).toBe(200);
				//console.log(body);
				var comp = JSON.parse(body);
				expect(comp[1].id).toBeDefined();
				expect(comp[1].name).toBeDefined();
				expect(comp[1].competitions).toBeDefined();
				done();
			});
		});	
		
		// test return code and categories DTO fields
		it("returns status code 200", function(done) {
			request.get(base_url + 'api/categories/1', function(error, response, body) {
				expect(response.statusCode).toBe(200);
				//console.log(body);
				var comp = JSON.parse(body);
				expect(comp.id).toBeDefined();
				expect(comp.name).toBeDefined();
				expect(comp.competitions).toBeUndefined();
				done();
			});
		});	
		
		// test return code and categories DTO fields
		it("returns status code 200", function(done) {
			request.get(base_url + 'api/categories/1?withCompetitions=1', function(error, response, body) {
				expect(response.statusCode).toBe(200);
				//console.log(body);
				var comp = JSON.parse(body);
				expect(comp.id).toBeDefined();
				expect(comp.name).toBeDefined();
				expect(comp.competitions).toBeDefined();
				done();
			});
		});	
			
	});
});

var request = require("request");

var base_url = "http://localhost:3000/"

describe("uResults server API", function() {
	
	describe("GET /api/competitions", function() {
		
		// test return code and competitions DTO fields
		it("returns status code 200", function(done) {
			request.get(base_url + 'api/competitions?category=1', function(error, response, body) {
				expect(response.statusCode).toBe(200);
				
				// DTO fields
				var comp = JSON.parse(body);
				expect(comp[1].id).toBeDefined();
				expect(comp[1].name).toBeDefined();
				expect(comp[1].category).toBe(1);
				expect(comp[1].season).toBeDefined();
				expect(comp[1].year).toBeDefined();
				expect(comp[1].active).toBeDefined();
				expect(comp[1].categoryName).toBeDefined();
				done();
			});
		});	
		
		// test return code and competitions DTO fields
		it("returns status code 200", function(done) {
			request.get(base_url + 'api/competitions/1', function(error, response, body) {
				expect(response.statusCode).toBe(200);
				
				// DTO fields
				var comp = JSON.parse(body);
				expect(comp.id).toBeDefined();
				expect(comp.name).toBeDefined();
				expect(comp.category).toBeDefined();
				expect(comp.season).toBeDefined();
				expect(comp.year).toBeDefined();
				expect(comp.active).toBeDefined();
				expect(comp.categoryName).toBeDefined();
				done();
			});
		});	
		
		// test return code and table DTO fields
		it("returns status code 200 with complete DTOs", function(done) {
			request.get(base_url + 'api/competitions/5/table', function(error, response, body) {
				expect(response.statusCode).toBe(200);
				
				// DTO fields
				var game = JSON.parse(body);
				expect(game[1].id).toBeDefined();
				expect(game[1].name).toBeDefined();
				expect(game[1].competition).toBeDefined();
				expect(game[1].games).toBeDefined();
				expect(game[1].pointsTotal).toBeDefined();
				expect(game[1].scorePlus).toBeDefined();
				expect(game[1].scoreMinus).toBeDefined();
				expect(game[1].wins).toBeDefined();
				expect(game[1].defeats).toBeDefined();
				expect(game[1].draws).toBeDefined();
				expect(game[1].forfeits).toBeDefined();
				
				// additional assertions
				expect(game[1].competition).toBe(5);
				expect(game[1].games == game[1].wins + game[1].draws + game[1].defeats).toBe(true);
				expect(game[1].games).toBeGreaterThan(0);
				expect(game[1].pointsTotal).toBeGreaterThan(0);
				expect(game[1].defeats >= game[1].forfeits).toBe(true);
				
				done();
			});
		});	
	});
});

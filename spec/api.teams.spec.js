var request = require("request");

var base_url = "http://localhost:3000/"

describe("uResults API - teams", function() {
	
	describe("GET /api/teams", function() {
		
		// test return code and teams DTO fields
		it("returns status code 200", function(done) {
			request.get(base_url + 'api/teams?competitions=5', function(error, response, body) {
				expect(response.statusCode).toBe(200);
				
				//DTO fields
				var team = JSON.parse(body);
				expect(team[0].id).toBeDefined();
				expect(team[0].name).toBeDefined();
				expect(team[0].club).toBeDefined();
				expect(team[0].category).toBeDefined();
				expect(team[0].competition).toBe(5);
				expect(team[0].clubName).toBeDefined();
				expect(team[0].categoryName).toBeDefined();
				done();
			});
		});	
		
		// test return code and team DTO fields
		it("returns status code 200", function(done) {
			request.get(base_url + 'api/teams/1', function(error, response, body) {
				expect(response.statusCode).toBe(200);
				
				//DTO fields
				var team = JSON.parse(body);
				expect(team.id).toBeDefined();
				expect(team.name).toBeDefined();
				expect(team.club).toBeDefined();
				expect(team.category).toBeDefined();
				expect(team.competition).toBeDefined();
				expect(team.clubName).toBeDefined();
				expect(team.categoryName).toBeDefined();
				done();
			});
		});	
			
	});
});

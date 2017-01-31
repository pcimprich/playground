var request = require("request");

var base_url = "http://localhost:3000/"

describe("uResults API - games", function() {
	
	describe("GET /api/games", function() {
		
		// test return code and games DTO fields
		it("returns status code 200 and several game DTOs", function(done) {
			request.get(base_url + 'api/games?competition=5', function(error, response, body) {
				expect(response.statusCode).toBe(200);
				
				//DTO fields
				var game = JSON.parse(body);
				expect(game[1].id).toBeDefined();
				expect(game[1].date).toBeDefined();
				expect(game[1].competition).toBe(5);
				expect(game[1].team_a).toBeDefined();
				expect(game[1].team_b).toBeDefined();
				expect(game[1].full_a).toBeDefined();
				expect(game[1].full_a).toBeDefined();
				expect(game[1].half_a).toBeDefined();
				expect(game[1].half_b).toBeDefined();
				expect(game[1].tries_a).toBeDefined();
				expect(game[1].tries_b).toBeDefined();
				expect(game[1].round).toBeDefined();
				expect(game[1].forfeit).toBeDefined();
				expect(game[1].shortDate).toBeDefined();
				expect(game[1].competitionName).toBeDefined();
				expect(game[1].team_aName).toBeDefined();
				expect(game[1].team_bName).toBeDefined();
				done();
			});
		});	
			
		// test return code and games DTO fields
		it("returns status code 200 and one game DTO", function(done) {
			request.get(base_url + 'api/games/1', function(error, response, body) {
				expect(response.statusCode).toBe(200);
				
				//DTO fields
				var game = JSON.parse(body);
				expect(game.id).toBeDefined();
				expect(game.date).toBeDefined();
				expect(game.competition).toBeDefined();
				expect(game.team_a).toBeDefined();
				expect(game.team_b).toBeDefined();
				expect(game.full_a).toBeDefined();
				expect(game.full_a).toBeDefined();
				expect(game.half_a).toBeDefined();
				expect(game.half_b).toBeDefined();
				expect(game.tries_a).toBeDefined();
				expect(game.tries_b).toBeDefined();
				expect(game.round).toBeDefined();
				expect(game.forfeit).toBeDefined();
				expect(game.shortDate).toBeDefined();
				expect(game.competitionName).toBeDefined();
				expect(game.team_aName).toBeDefined();
				expect(game.team_bName).toBeDefined();
				done();
			});
		});
	});
});

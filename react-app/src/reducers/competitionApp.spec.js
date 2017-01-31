// to be run with Jasmine: jasmine-node <DIR>
"use strict";

var deepFreeze = require('deep-freeze');
var reducer = require('./competitionApp').reducer;
var actions = require('./actions');

describe("testing reducers", function() {
		
	it("should return the initial state", () => {
		
		const initialState = { 
			competition: { id: '', name: '', categoryName: '' },
			tab: 1 
		};
		
		deepFreeze(initialState);
		
		expect(JSON.stringify(reducer(undefined, {}))).toEqual(JSON.stringify(initialState));
	})
			
	it("should handle SET_COMPETITION action", () => {
	
		const competition = { id: 5, name: 'CLJ U18', active: 1, category: 2, categoryName: 'Under 18', 
							season: '2016/17', year: 2016, ranking: [] };
							
		const stateBefore = { 
			competition: { id: '', name: '', categoryName: '' },
			tab: 1 
		};
	
		const action = actions.actionSetCompetition(competition);
	
		const stateAfter = { 
			competition: competition,
			tab: 1 
		};

  		deepFreeze(stateBefore);
  		deepFreeze(action);
	
		expect(reducer(stateBefore, action)).toEqual(stateAfter);
	})
	
	it("should handle SET_TABS action", () => {
	
		const competition = { id: 5, name: 'CLJ U18', active: 1, category: 2, categoryName: 'Under 18', 
							season: '2016/17', year: 2016, ranking: [] };
							
		const stateBefore = { 
			competition: competition,
			tab: 1 
		};
	
		const action = actions.actionSetTabs(2)
	
		const stateAfter = { 
			competition: competition,
			tab: 2
		};

  		deepFreeze(stateBefore);
  		deepFreeze(action);
	
		expect(reducer(stateBefore, action)).toEqual(stateAfter);
	})
	
	it("should handle unknown action", () => {
	
		const competition = { id: 5, name: 'CLJ U18', active: 1, category: 2, categoryName: 'Under 18', 
							season: '2016/17', year: 2016, ranking: [] };
							
		const stateBefore = { 
			competition: competition,
			tab: 1 
		};
	
		const action = {
	    	type: 'UNKNOWN_ACTION'
		};

  		deepFreeze(stateBefore);
  		deepFreeze(action);
	
		expect(reducer(stateBefore, action)).toEqual(stateBefore);
	})
})

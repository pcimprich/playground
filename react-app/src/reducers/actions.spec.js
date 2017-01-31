// to be run with Jasmine: jasmine-node <DIR>
"use strict";

var actions = require('./actions');

describe("testing action creators", () => {
	
	  it('should create an action to set a competition', () => {
		  
	    const competition = { id: 5, name: 'CLJ U18', active: 1, category: 2, categoryName: 'Under 18', 
								season: '2016/17', year: 2016, ranking: [] };
							
	    const expectedAction = {
			type: 'SET_COMPETITION',
  		  	competition: competition
	    };
		
	    expect(actions.actionSetCompetition(competition)).toEqual(expectedAction);
	  })

	  it('should create an action to set a tab', () => {
							
	    const expectedAction = {
			type: 'SET_TABS',
  		  	tab: 2
	    };
		
	    expect(actions.actionSetTabs(2)).toEqual(expectedAction);
	  })
})

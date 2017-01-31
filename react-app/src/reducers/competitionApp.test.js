// plain JS test script
"use strict";

var deepFreeze = require('deep-freeze');
var expect = require('expect');
var reducer = require('./competitionApp').reducer;

const testReducer1 = () => {
	
	const stateBefore = { 
		competition: { 
			id: "", 
			name: "", 
			categoryName: "" },
		tab: 1 
	};
	
	const action = {
	    type: 'SET_COMPETITION',
	    competition: {
			id: 5, 
			name: 'CLJ U18', 
			active: 1, 
			category: 2, 
			categoryName: 'Under 18', 
			season: '2016/17', 
			year: 2016, 
			ranking: []
		}
	};
	
	const stateAfter = { 
		competition: {
			id: 5, 
			name: 'CLJ U18', 
			active: 1, 
			category: 2, 
			categoryName: 'Under 18', 
			season: '2016/17', 
			year: 2016, 
			ranking: []
		},
		tab: 1 
	};

  	deepFreeze(stateBefore);
  	deepFreeze(action);
	
	expect(reducer(stateBefore, action)).toEqual(stateAfter);
}

const testReducer2 = () => {
	
	const stateBefore = { 
		competition: {
			id: 5, 
			name: 'CLJ U18', 
			active: 1, 
			category: 2, 
			categoryName: 'Under 18', 
			season: '2016/17', 
			year: 2016, 
			ranking: []
		},
		tab: 1 
	};
	
	const action = {
	    type: 'SET_TABS',
	    tab: 2
	};
	
	const stateAfter = { 
		competition: {
			id: 5, 
			name: 'CLJ U18', 
			active: 1, 
			category: 2, 
			categoryName: 'Under 18', 
			season: '2016/17', 
			year: 2016, 
			ranking: []
		},
		tab: 2
	};

  	deepFreeze(stateBefore);
  	deepFreeze(action);
	
	expect(reducer(stateBefore, action)).toEqual(stateAfter);
}

testReducer1();
testReducer2();
console.log('Tests passed!');


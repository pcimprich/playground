"use strict";

const reducer = (state = 1, action) => {
	//console.log('REDUCER: ', action);

  	switch (action.type) {
		case 'SET_TABS':
			return action.tab
    	default:
			return state;
  	  } 
}

module.exports.reducer = reducer;

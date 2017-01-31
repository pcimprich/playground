"use strict";

const initialState = { id: "", name: "", categoryName: "" };

const reducer = (state = initialState, action) => {
  //console.log('REDUCER: ', action);

  switch (action.type) {
    case 'SET_COMPETITION':
      return action.competition;
    default:
      return state;
  }
};

module.exports.reducer = reducer;
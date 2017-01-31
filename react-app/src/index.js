var React = require('react');
var ReactDOM = require('react-dom');
var createStore = require('redux').createStore;
var Provider = require('react-redux').Provider;
var reducer = require('./reducers/competitionApp').reducer;
var CompetitionApp = require('./components/CompetitionApp').Component;

const store = createStore(reducer);

const render = () => {
	//console.log('STATE: ', store.getState());
	ReactDOM.render(
		<Provider store={store}>
  	  		<CompetitionApp />
		</Provider>,
  	  document.getElementById('root')
	);
}

store.subscribe(render);
render();
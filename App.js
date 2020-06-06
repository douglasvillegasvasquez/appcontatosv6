// import React from 'react';

// import Navigator from './navigator/Navigator';

// export default function App() {
// 	return (
// 		<Navigator></Navigator>
// 	);
// }
import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import contatosReducer from './store/contatosReducer';

import Navigator from './navigator/Navigator';

const store = createStore(
	combineReducers({
		contatosReducer
	}),
	applyMiddleware(reduxThunk)
);

export default function App() {
	return (
		<Provider store={store}>
			<Navigator />
		</Provider>
	);
}
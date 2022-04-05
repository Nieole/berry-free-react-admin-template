import { applyMiddleware, createStore } from 'redux';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';

// ==============================|| REDUX - MAIN STORE ||============================== //

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger)));
const persister = 'Free';

export { store, persister };

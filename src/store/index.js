import { createStore } from 'redux';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// ==============================|| REDUX - MAIN STORE ||============================== //

const store = createStore(reducer, composeWithDevTools());
const persister = 'Free';

export { store, persister };

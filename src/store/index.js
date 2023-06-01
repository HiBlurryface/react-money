import {createStore, combineReducers} from 'redux'; 
import { expensesReducer } from 'store/expensesReducer';
import { gainsReducer } from 'store/gainsReducer';

const rootReducer = combineReducers({
    expenses: expensesReducer,
    gains: gainsReducer,
})

export const store = createStore(rootReducer);
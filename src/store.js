import { createStore, combineReducers } from 'redux';
import { resultReducer } from './components/result/reducer.js';
import { tabsReducer } from './components/tabs/reducer.js';

const store = createStore(combineReducers({
  result: resultReducer,
  tabs: tabsReducer
}));

export default store;

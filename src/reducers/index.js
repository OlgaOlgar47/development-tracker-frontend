import { combineReducers } from '@reduxjs/toolkit';
import skillReducer from './skillReduser';

const rootReducer = combineReducers({
  skill: skillReducer,
});

export default rootReducer;

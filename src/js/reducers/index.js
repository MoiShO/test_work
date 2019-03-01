import { combineReducers } from 'redux';
import { items, arcticleHasErrored, arcticleIsLoading } from './item.js';

export default combineReducers({
    items,
    arcticleHasErrored,
    arcticleIsLoading,
});
import { combineReducers } from 'redux';
import { bindActionCreators } from 'redux'
import { items, arcticleHasErrored, arcticleIsLoading, changeLanguage } from './item.js';



export default combineReducers({
    items,
    arcticleHasErrored,
    arcticleIsLoading,
    changeLanguage,
});
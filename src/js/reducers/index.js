import { combineReducers } from 'redux';
import { items, arcticleHasErrored, arcticleIsLoading, changeLanguage, arcticleIsDeleted } from './item.js';



export default combineReducers({
    items,
    arcticleHasErrored,
    arcticleIsLoading,
    changeLanguage,
    arcticleIsDeleted,
});

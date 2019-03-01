import {
    ADD_ARTICLE, 
    DEL_ARTICLE, 
    CHANGE_ARTICLE,
    ARTICLE_IS_LOADING,
    ARTICLE_HAS_ERRORED,
    ARTICLE_FETCH_DATA_SUCCESS
} from "../constants/action-types.js";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
};

export function delArticle(payload) {
    return { type: DEL_ARTICLE, payload }
};

export function changeArticle(payload) {
    return { type: CHANGE_ARTICLE, payload }
};

export function arcticleHasErrored(bool) {
    return { type: ARTICLE_HAS_ERRORED, hasErrored: bool };
}

export function arcticleIsLoading(bool) {
    return { type: ARTICLE_IS_LOADING, isLoading: bool };
}

export function arcticleFetchDataSuccess(items) {
    return { type: ARTICLE_FETCH_DATA_SUCCESS, items };
}
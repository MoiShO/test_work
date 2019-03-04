import {
    ARTICLE_HAS_ERRORED,
    ARTICLE_FETCH_DATA_SUCCESS,
    ADD_ARTICLE,
    DEL_ARTICLE,
    ARTICLE_IS_LOADING,
    UPDATE_ARTICLE,
    CHANGE_LANG,
    ARTICLE_IS_DELETED,
} from "../constants/action-types.js";

let load = false

export function arcticleHasErrored(bool) {
    return { type: ARTICLE_HAS_ERRORED, hasErrored: bool };
}

export function arcticleIsLoading(bool) {
    return { type: ARTICLE_IS_LOADING, isLoading: bool };
}

export function arcticleFetchDataSuccess(items) {
    return { type: ARTICLE_FETCH_DATA_SUCCESS, items };
}

export function addArticlePost(items) {
    return { type: ADD_ARTICLE, items }
}

export function delArticlePost(items) {
    return { type: DEL_ARTICLE, items }
}

export function updateArticlePost(items) {
    return { type: UPDATE_ARTICLE, items }
}

export function changeLanguage(lang) {
    return { type: CHANGE_LANG, lang }
}

export function arcticleIsDeleted(bool) {
    return { type: ARTICLE_IS_DELETED, isDeleted: bool };
}

export function articleFetchData() {
        return (dispatch) => {
            if(load === false) {

                load = true;

                dispatch(arcticleIsLoading(true));
                
                const url = 'http://private-9aad-note10.apiary-mock.com/notes'

                fetch(url)
                    .then((response) => {
                        if (!response.ok) {
                            throw Error(response.statusText);
                        }
                        
                        dispatch(arcticleIsLoading(false));
                        dispatch(arcticleHasErrored(false));

                        return response;
                    })
                    .then((response) => response.json())
                    .then((items) => dispatch(arcticleFetchDataSuccess(items)))
                    .catch(() => dispatch(arcticleHasErrored(true)));
            } 
            else {
                dispatch(arcticleIsLoading(false))
            }
    }
    
}

export function addArticle(data) {
    return (dispatch) => {

        const url = 'https://private-anon-535510ee6b-note10.apiary-mock.com/notes'

        fetch(url,
            {
                method: "POST",
                body: JSON.stringify({title: data.title})
            })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(arcticleHasErrored(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(addArticlePost(items)))
            .catch(() => dispatch(arcticleHasErrored(true)));
    };
}

export function delArticle(data) {
    return (dispatch) => {

        dispatch(arcticleIsDeleted(true));

        const url = `https://private-anon-535510ee6b-note10.apiary-mock.com/notes/${data.id}`

        fetch(url,
            {
                method: "DELETE",
            })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(arcticleIsDeleted(false));

                dispatch(arcticleHasErrored(false));

                return response;
            })
            .then(() => dispatch(delArticlePost(data)))
            .catch(() => dispatch(arcticleHasErrored(true)));
    };
}

export function changeArticle(data) {
    return (dispatch) => {
        
        const url = `https://private-anon-535510ee6b-note10.apiary-mock.com/notes/${data.id}`

        fetch(url,
            {
                method: "PUT",
                body: JSON.stringify({title: data.title})
            })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(arcticleHasErrored(false));

                return response;
            })
            .then((response) => response.json())
            .then(() => dispatch(updateArticlePost(data)))
            .catch(() => dispatch(arcticleHasErrored(true)));
    };
}

export function arcticleHasErrored(state = false, action) {
    switch (action.type) {
        case 'ARTICLE_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function arcticleIsLoading(state = false, action) {
    switch (action.type) {
        case 'ARTICLE_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function items(state = [], action) {
    switch (action.type) {
        case 'ARTICLE_FETCH_DATA_SUCCESS':
            return action.items;

        default:
            return state;
    }
}
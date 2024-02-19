export const initialState={
    categories : [],
    products : [],
    isCatLoading : false,
    isProLoading : false
}

export function reducer(state, action){
    switch(action.type){
        case('FETCHING_CAT_DATA'):
            return {
                ...state,
                isCatLoading: true
            }
        case('FETCHED_CAT_DATA'):
            return {
                ...state,
                isCatLoading: false,
                categories: action.payload
            }
        case('FETCHED_ERROR_CAT_DATA'):
            return {
                ...state,
                isCatLoading: false,
            }
        case('FETCHING_PRO_DATA'):
            return {
                ...state,
                isProLoading: true
            }
        case('FETCHED_PRO_DATA'):
            return {
                ...state,
                isProLoading: false,
                products: action.payload
            }
        case('FETCHED_ERROR_PRO_DATA'):
            return {
                ...state,
                isProLoading: false,
            }
        default : state
    }
}
import { SET_ACTIVE_PAGE } from '../actionTypes/nav'

export const setActivePage = (page: string, isAuthPage=false, hasLeftNav=false) => {
    return {
        type: SET_ACTIVE_PAGE,
        payload: {
            pageName: page,
            activePage: page,
            isAuthPage,
            hasLeftNav,
        }
    }
}

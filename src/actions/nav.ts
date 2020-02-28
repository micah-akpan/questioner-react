import { pageToActionType } from '../actionTypes/nav'

export const getNavItemRequest = (type: string) => {
    return {
        type: pageToActionType[type],
    }
}

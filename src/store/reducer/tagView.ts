import {BaseRoute} from '../../route/types';

export interface TagViewState{
    visitedViews: Array<BaseRoute>
}
export interface TagAction{
    type: Symbol,
    view: BaseRoute
}
const initState: TagViewState = {
    visitedViews: [] as Array<BaseRoute>,
}
export const types = {
    ROUTE_CHANGE: Symbol('ROUTE_CHANGE'),
}

export const addVisitedView = (path: string, meta: {title: string}) => {
    return {
        type: types.ROUTE_CHANGE,
        view: {path, meta} as BaseRoute
    }
}

export const tagReducer = (state: TagViewState = initState, action: TagAction): TagViewState => {
    switch (action.type) {
        case types.ROUTE_CHANGE:
            if (state.visitedViews.some((v: any) => v.path === action.view.path)) return initState
            state.visitedViews.push(
                Object.assign({}, action.view, {
                    title: action.view.meta.title || 'no-name',
                }),
            )
            return state
        default:
            return initState
    }
}

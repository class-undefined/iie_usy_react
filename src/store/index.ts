import {createStore} from 'redux'
import {reducer} from './reducer';
import {TagAction, tagReducer, TagViewState} from './reducer/tagView';
export const store = {
    reducer: createStore(reducer),
    tagReducer: createStore<TagViewState, TagAction, unknown, unknown>(tagReducer)
}

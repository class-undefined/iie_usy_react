import {store} from '../../store';
import {addVisitedView} from '../../store/reducer/tagView';
export const storeExample = () => {
    console.log('storeExample')
    store.reducer.subscribe(() => {
        console.log(store.reducer.getState());
    })
    store.tagReducer.subscribe(() => {
        console.log(store.tagReducer.getState());
    })
    store.tagReducer.dispatch(addVisitedView('/home', {title: '主页'}))
}

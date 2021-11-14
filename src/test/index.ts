import {sortExample} from './function/sortExample';
import {storeExample} from './store/storeExample';
import {getBreadListParam, getSinglePath, navBarConfig} from '../route/config';

export const Test = () => {
    sortExample()
    storeExample()
    console.log(getBreadListParam(navBarConfig));
}

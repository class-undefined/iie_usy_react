import {sortExample} from './function/sortExample';
import {storeExample} from './store/storeExample';
import {getBreadListParam, navBarConfig} from '../route/config';
import {ArrayEqualExample} from './function/ArrayEqualExample';

export const Test = () => {
    sortExample()
    storeExample()
    console.log(getBreadListParam(navBarConfig));
    ArrayEqualExample()
}

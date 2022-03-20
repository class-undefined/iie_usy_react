import { sortExample } from './function/sortExample';
import { storeExample } from './store/storeExample';
import { getBreadListParam, navBarConfig } from '../route/config';
import { routeExample } from './route/routeExample';
import { ArrayEqualExample } from './function/ArrayEqualExample';
import { tempTest } from './temp/tempTest';
import { StringTest } from './function/stringUtilsTest';

export const Test = () => {
    sortExample()
    storeExample()
    routeExample()
    ArrayEqualExample()
    tempTest()
    StringTest()
}

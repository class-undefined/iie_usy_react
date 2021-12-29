import {splitRoutePath, spliceRoutePath} from '../../utils/router';

export const tempTest = () => {
    console.log(splitRoutePath('/abc/def/'));
    console.log(splitRoutePath('/'));
    console.log(spliceRoutePath('/'));
}

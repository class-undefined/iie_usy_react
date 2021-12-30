import {splitRoutePath, spliceRoutePath} from '../../utils/router';

export const tempTest = (isLog: boolean=false) => {
    if (!isLog) return
    console.log(splitRoutePath('/abc/def/'));
    console.log(splitRoutePath('/'));
    console.log(spliceRoutePath('/'));
}

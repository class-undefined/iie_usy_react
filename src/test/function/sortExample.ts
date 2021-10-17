import {ArrayEqual, sort} from '../../utils';

export const sortExample = () => {
    const nums = [4, 54, 64, 654, 651, 321, 54, 61, 3213]
    const compare = (a: number, b: number) => a - b < 0
    const ans = sort<number>(nums, compare)
    console.assert(ArrayEqual(ans, [4, 54, 54, 61, 64, 321, 651, 654, 3213]), "sort 函数出现异常")
}

import {ArrayEqual} from '../../utils';

/* 嵌套三层数组 */
const test1 = () => {
    const source = [
        [1, 2, 3],
        [4, [5, 7], 6],
        [4, 5],
    ]
    const target = [
        [1, 2, 3],
        [4, [5, 7], 6],
        [4, 5],
    ]
    console.assert(ArrayEqual(source, target), 'ArrayEqualExample1');
}
/* 嵌套两层情况 */
const test2 = () => {
    const source = [
        [1, 2, 3],
        [4, 5, 6],
        [4, 5],
    ]
    const target = [
        [1, 2, 3],
        [4, 5, 6],
        [4, 5],
    ]
    console.assert(ArrayEqual(source, target), 'ArrayEqualExample2');
}
/* 多了元素的情况 */
const test3 = () => {
    const source = [
        [1, 2, 3],
        [4, 5, 6],
        [4, 5, 8],
    ]
    const target = [
        [1, 2, 3],
        [4, 5, 6],
        [4, 5],
    ]
    console.assert(!ArrayEqual(source, target), 'ArrayEqualExample3');
}

/* 数组结构不一样1 */
const test4 = () => {
    const source = [
        [1, 2, 3],
        [[4], 5, 6],
        [4, 5, 8],
    ]
    const target = [
        [1, 2, 3],
        [4, [5], 6],
        [4, 5],
    ]
    console.assert(!ArrayEqual(source, target), 'ArrayEqualExample4');
}

/* 数组结构不一样2 */
const test5 = () => {
    const source = [
        [1, 2, 3],
        [[4], 5, 6],
        [4, 5],
    ]
    const target = [
        [1, 2, 3],
        [4, 5, 6],
        [4, 5],
    ]
    console.assert(!ArrayEqual(source, target), 'ArrayEqualExample5');
}
export const ArrayEqualExample = () => {
    console.log('ArrayEqualExample')
    test1()
    test2()
    test3()
    test4()
    test5()
}

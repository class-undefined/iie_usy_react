import {spliceRoutePath} from '../../layout/NavBar/config';
import {ArrayEqual} from '../../utils';
const test1 = () => {
    const param = '/abc/'
    const target = ['/abc']
    const source = spliceRoutePath(param)
    console.assert(ArrayEqual(source, target), 'routeExample1')
}
/* 测试去除尾部的斜杠/ */
const test2= () => {
    const param = '/abc///'
    const target = ['/abc']
    const source = spliceRoutePath(param)
    console.assert(ArrayEqual(source, target), 'routeExample2')
}
/* 测试多次分割 */
const test3= () => {
    const param = '/abc/def/c/d'
    const target = ['/abc', '/def', '/c', '/d']
    const source = spliceRoutePath(param)
    console.assert(ArrayEqual(source, target), 'routeExample3')
}
export const routeExample = () => {
    console.log('routeExample')
    test1()
    test2()
    test3()
}

import {spliceRoutePath} from '../../layout/NavBar/config';
import {ArrayEqual, trim} from '../../utils';
import {RouteUtils} from '../../route/utils';

const test1 = () => {
    const param = '/abc/'
    const target = ['/abc']
    const source = spliceRoutePath(param)
    console.assert(ArrayEqual(source, target), 'routeExample1')
}
/* 测试去除尾部的斜杠/ */
const test2 = () => {
    const param = '/abc///'
    const target = ['/abc']
    const source = spliceRoutePath(param)
    console.assert(ArrayEqual(source, target), 'routeExample2')
}
/* 测试多次分割 */
const test3 = () => {
    const param = '/abc/def/c/d'
    const target = ['/abc', '/def', '/c', '/d']
    const source = spliceRoutePath(param)
    console.assert(ArrayEqual(source, target), 'routeExample3')
}

const test4 = () => {
    const param = '/abc/def/'
    const target = '/abc/def'
    const source = trim(param)
    console.assert(source === target, 'routeExample4')
}

const test5 = () => {
    const param: Array<string[] | string> = [['info', 'leadership'], '/scientific/achievement']
    const target = [['学院概况', '领导团队'], ['学术科研', '科研成果']]
    for (let i = 0; i < param.length; i++) {
        const a = param[i]
        if (typeof a === 'string') console.assert(ArrayEqual(RouteUtils.getRouteNames(a as string), target[i]));
        else console.assert(ArrayEqual(RouteUtils.getRouteNames(a as string[]), target[i]));
    }
}

export const routeExample = () => {
    test1()
    test2()
    test3()
    test4()
    test5()
}

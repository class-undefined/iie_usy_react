import { ArrayEqual } from '../../utils';
import { trim } from '../../utils/StringUtils';
import { RouteUtil, RouteUtils } from '../../route/utils';
import { spliceRoutePath } from '../../utils/router';

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

const test41 = () => {
    const param = '/info'
    const target = ['/info']
    const source = spliceRoutePath(param)
    console.assert(ArrayEqual(source, target), 'routeExample41')
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

const test6 = (isLog: boolean = false) => {
    const param = '/info/introduction'
    const target = RouteUtils.getRoute(param)
    if (isLog) console.log(target);
}

const test7 = (isLog: boolean = false) => {
    const param = '/info'
    const target = RouteUtils.getRoute(param)
    if (isLog) console.log(target);
}

/* 不存在的路径则返回null */
const test8 = (isLog: boolean = true) => {
    const param = '/info/1'
    const target = RouteUtils.getRoutes(param)
    console.assert(target === null)
    // if (isLog) console.log(target);
}

const test9 = (isLog: boolean = true) => {
    const param = '/info/introduction'
    const target = RouteUtil.getRoute(param)
    if (isLog) console.log(target)
}

const test10 = (isLog: boolean = true) => {
    const param = '/info/introduction'
    let start = new Date().getTime()
    for (let i = 0; i < 100000; i++) RouteUtils.getRoute(param)
    if (isLog) console.log(new Date().getTime() - start)

    start = new Date().getTime()
    for (let i = 0; i < 100000; i++) RouteUtil.getRoute(param)
    if (isLog) console.log(new Date().getTime() - start)
}

const test11 = (isLog: boolean = false) => {
    const param = '/info/'
    const target = RouteUtil.getRoute(param)
    if (isLog) console.log(target)
}

export const routeExample = () => {
    test1()
    test2()
    test3()
    test4()
    test41()
    test5()
    test6()
    test7()
    test8()
    test9()
    test10(false)
    test11()
}

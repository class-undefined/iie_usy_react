/**
 * 分割路由
 * @param pathname 路由地址
 * @example
 * const pathname = "/info/introduction"
 * const result = splitRoutePath(pathname)
 * result === ['info', 'introduction']
 *
 * // warn: pathname为 '/' 时，分割结果为空数组
 * const home = "/"
 * const result = splitRoutePath(pathname)
 * result === []
 */
export const splitRoutePath = (pathname: string) => {
    if (pathname.length > 0 && pathname.charAt(0) === '/') pathname = pathname.substr(1, pathname.length)
    return pathname.split('/').filter(path => path !== '')
}

/**
 * 分割路由
 * @param path
 * @example
 * const path = "/abc/def"
 * const target = spliceRoutePath(path)
 * target === ['/abc', '/def']
 * //
 * const path = "/"
 * const target = spliceRoutePath(path)
 * target === ['/']
 */
export const spliceRoutePath = (path: string) => {
    let s = ''
    if (path === '/') return ['/']
    else s = path[0]
    let right = path.length - 1

    /* 去除尾部非法的斜杠/ */
    while (right > 0 && path[right] === '/') right--
    path = path.substr(0, right + 1)

    const paths = [] as string[]
    /* 从第二个字符开始遍历 */
    for (let i = 1; i < path.length; i++) {
        if (i === path.length - 1) s += path[i]
        if (path[i] === '/' || i === path.length - 1) {
            paths.push(s)
            s = ''
        }
        s += path[i]
    }
    return paths
}

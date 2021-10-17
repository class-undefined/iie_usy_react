/**
 * 将一维数组升维，每 size 个元素为一组
 * @param nDArray 需要升维的数组
 * @param size 组成一组需要的元素个数
 */
export const packedArray = <T>(nDArray: Array<T>, size: number = 3) => {
    const ans = [] as Array<Array<T>>
    let pack = [] as Array<T>
    for (let i = 0; i < nDArray.length; i++) {
        // 如果数量达到要求（pack元素有 size 个 && pack不为0）
        pack.push(nDArray[i])
        if (((i + 1) % size === 0 && pack.length !== 0) || (i === nDArray.length - 1 && i !== 0)) {
            ans.push(pack)
            pack = [] as Array<T>
        }
    }
    /* 出现空白元素填充null */
    return ans.map(array => {
        const {length} = array
        if (size === 3) {
            if (length === 1) return [null, array[0], null]
            else if (length === 2) return [array[0], null, array[1]]
        } else if(size === 2) {
            if (length === 1) return [...array, null]
        }
        return array
    })
}

/**
 * 堆排序
 * @param items 需要排序的数组
 * @param compare 比较器
 */
export const sort = <T>(items: Array<T>, compare: (a: T, b:T) => boolean) => {
    const array = [] as Array<T>
    const swap = (i: number, j: number) => {
        const t = array[i]
        array[i] = array[j]
        array[j] = t
    }
    const up = (k: number) => {
        while (k > 0 && compare(array[k], array[parseInt((((k + 1) >> 1) - 1 ) + '')])) { // 右移一位是 / 2
            swap(k , parseInt((((k + 1) >> 1) - 1) + ''))
            k = parseInt((((k + 1) >> 1) - 1 ) + '')
        }
    }
    const down = (k: number) => {
        while ((k << 1) + 1 < array.length) {
            let i  = (k << 1) + 1 // 左移 1 是乘以两倍
            if (i < array.length - 1 && !compare(array[i], array[i + 1])) i++ // 当前为 k 的左节点，若右节点比他大 则游标右移
            if (compare(array[k], array[i])) break
            swap(k, i)
            k = i
        }
    }
    const insert = (e: T) => {
        array.push(e)
        up(array.length - 1)
    }
    const pop = () => {
        const item = array[0]
        swap(0, array.length - 1)
        array.pop()
        down(0)
        return item
    }
    items.forEach(item => insert(item))
    const ans = [] as Array<T>
    const {length} = array
    while (ans.length !== length){
        ans.push(pop())
    }
    return ans
}

export const ArrayEqual = <T>(s1: Array<T>, s2: Array<T>) => {
    if (s1.length !== s2.length) return false
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) return false
    }
    return true
}

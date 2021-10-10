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

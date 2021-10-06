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
    return ans
}

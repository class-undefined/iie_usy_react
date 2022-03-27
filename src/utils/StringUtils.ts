import { CssUnit } from "../type/css"

/**
 * 从后往前遍历，仅保留数字 + 大小写字母
 * @param s
 * @example
 * const s = "/abc/def///.."
 * const target = trim(s)
 * target === "/abc/def"
 */
export const trim = (s: string): string => {
    /**
     * 从后往前清除不属于route规则的字符
     * @param ch
     */
    const isAllow = (ch: string): boolean => {
        const ascii: number = ch.charCodeAt(0)
        const isNumber: boolean = ascii >= 48 && ascii <= 57 // 是否为数字
        const isChar: boolean = (ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122) //是否为a-z or A-Z
        return isNumber || isChar
    }
    let right = s.length - 1
    while (!isAllow(s.charAt(right))) {
        right--
    }
    return s.substring(0, right + 1)
}

/** 清除每行首尾空格，以及将连续空格出现次数大于1替换为一个空格 */
export const clearSpace = (str: string) => {
    let s = ""
    for (const line of str.split('\n')) {
        let i = 0
        let j = line.length - 1;
        /* 去除守卫空格 */
        while (i < line.length && line[i] === " ") i++
        while (j >= 0 && line[j] === " ") j--
        let space = 0 // 记录连续出现空格数，若空格大于1则需要清除
        let newLine = ""
        for (let k = i; k <= j; k++) {
            while (k <= j && line[k] === " ") {
                space++
                k++
            }
            if (space > 0) newLine += " "
            newLine += line[k]
            space = 0 // 清除空格计数
        }
        if (newLine.length === 0) continue
        s += newLine + "\n"
    }
    return s
}

/**获取css尺寸的值以及其单位
 * @param unitStr css尺寸
 * @returns obj: { value: number, unit: string }
 * @example
 * const width = "100px"
 * const result = getCssUnit(width)
 * // result: {value: 100, unit: "px"}
 */
export const getCssUnit = (unitStr: string): { value: number, unit: CssUnit } => {
    let right = unitStr.length - 1
    const num = '0'.charCodeAt(0)
    const isNumber = (s: string) => {
        if (s === '.') return true
        console.assert(s.length === 1)
        const ascii = s.charCodeAt(0)
        return (ascii <= (num + 9) && (ascii >= num))
    }
    while (isNumber(unitStr[right]) === false) right--
    return {
        value: parseFloat(unitStr.substring(0, right + 1)),
        unit: unitStr.substring(right + 1, unitStr.length) as CssUnit
    }
}
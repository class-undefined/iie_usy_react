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

